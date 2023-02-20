import React from 'react'
import './styles/formComponent.css'

const FormComponent = () => {
    return (
        <form action="https://formsubmit.co/alexpacheco407@gmail.com" method="POST">

            <div className="inp">
                <label htmlFor="firstName">Nombre</label>
                <input required name="Nombre" type="text" id='firstName' placeholder='Ingrese su nombre' />
            </div>

            <div className="inp">
                <label htmlFor="lastName">Apellido</label>
                <input name="Apellido" type="text" id='lastName' placeholder='Ingrese su apellido' />
            </div>

            <div className="inp">
                <label htmlFor="numberTel">Número de contacto</label>
                <input required name="Telefono" type="number" id='numberTel' placeholder='Ingrese su número de teléfono' />
            </div>

            <div className="inp">
                <label htmlFor="motivo">Motivo</label>
                <input name="Motivo" type="text" id='motivo' placeholder='Motivo por el cual se comunica' />
            </div>

            <div className="inp">
                <label htmlFor="text">Déjanos un mensaje</label>
                <textarea name="Texto" id="text" cols="30" rows="5"></textarea>
            </div>

            <button>Enviar</button>

            <input type="hidden" name="_next" value="http://localhost:5173/#/next-form"></input>
            <input type="hidden" name="_captcha" value="false"></ input>

        </form>
    )
}

export default FormComponent