import React, { useState } from 'react'
import './styles/iconsFloat.css'

const IconsFloat = ({ setShowFloatForm }) => {

    const [isRedesSociales, setIsRedesSociales] = useState(false)
    const [showBtnWsp, setShowBtnWsp] = useState(false)
    const [isArrowTop, setIsArrowTop] = useState(false)

    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            setIsArrowTop(true)
        } else {
            setIsArrowTop(false)
        }
    })


    setTimeout(() => {
        setIsRedesSociales(true)
        setShowBtnWsp(true)
    }, 6000);

    const handleClickEmail = () => {
        setShowFloatForm(true)
    }

    return (
        <div className='icons__float'>

            <div className={`redes_sociales_float ${isRedesSociales && 'show_redes_float'}`}>
                <a href="https://www.facebook.com" target={'_blank'}> <i className='bx bxl-facebook-square' ></i></a>
                <a href="https://www.instagram.com/?hl=es-la" target={'_blank'}> <i className='bx bxl-instagram-alt' ></i></a>
            </div>

            <a className={`btn__wsp ${showBtnWsp && 'show__btn__wsp'}`} href="#">
                <a href="https://web.whatsapp.com" target={'_blank'}><i className='bx bxl-whatsapp'></i></a>
            </a>

            <div onClick={handleClickEmail} className={`btn__email ${isRedesSociales && 'show__btn__email'} `} href="#">
                <i className='bx bx-envelope' ></i>
            </div>

            <a className={`arrow_top ${isArrowTop && 'show_arrow_top'}`} href="#">
                <i className={`bx bx-chevrons-up ${isArrowTop && 'show_arrow_top'}`}></i>
            </a>

        </div>
    )
}

export default IconsFloat