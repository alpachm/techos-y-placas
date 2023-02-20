import React, { useEffect } from 'react'
import FormComponent from './FormComponent'
import './styles/floatForm.css'

const FloatForm = ({ showFloatForm, setShowFloatForm }) => {


    useEffect(() => {
        setTimeout(() => {
            setShowFloatForm(true)
        }, 15000);
    }, [])

    const hideFloatForm = () => {
        setShowFloatForm(false)
    }

    return (
        <div className={`float__form ${showFloatForm && 'show__float__form'}`}>
            <i onClick={hideFloatForm} className='bx bx-x'></i>
            <div className="content__float__form grilla">
                <h1>¿En que lo podemos ayudar?</h1>
                <FormComponent />
            </div>
        </div>
    )
}

export default FloatForm