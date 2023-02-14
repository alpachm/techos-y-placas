import React from 'react'
import './styles/registroForm.css'

const RegistroForm = ({ registroForm }) => {
    return (
        <div className='registro_form'>
            <div className="contente__register__form grilla">
                {
                    registroForm?.map(registro => (
                        <div className="box__registro">
                            <h2>Nombre: {registro.Nombre}</h2>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default RegistroForm