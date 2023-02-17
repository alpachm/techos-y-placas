import React from 'react'
import { useSelector } from 'react-redux'
import './styles/registroForm.css'

const RegistroForm = ({ }) => {

    const formData = useSelector(state => state.formData)

    console.log(formData);

    return (
        <div className='registro_form'>
            <div className="contente__register__form grilla">

            </div>

        </div>
    )
}

export default RegistroForm