import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/contact.css'
import defaultValuesForm from '../utils/defaultValuesForm'

const Contact = ({ setRegistroForm }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        console.log(data);
        // setRegistroForm(data)
        reset(defaultValuesForm)
    }

    return (
        <section className="contact">
            <div className="content__contact grilla">
                <h3>¿Interesado/a en contratarnos?</h3>
                <span>Dejanos un mensaje y lo contactaremos en el transcurso del día</span>

                <form onSubmit={handleSubmit(submit)}>

                    <div className="inp">
                        <label htmlFor="firstName">Nombre</label>
                        <input {...register('Nombre')} type="text" id='firstName' placeholder='Ingrese su nombre' />
                    </div>

                    <div className="inp">
                        <label htmlFor="lastName">Apellido</label>
                        <input {...register('Apellido')} type="text" id='lastName' placeholder='Ingrese su apellido' />
                    </div>

                    <div className="inp">
                        <label htmlFor="numberTel">Número de contacto</label>
                        <input {...register('Numero')} type="number" id='numberTel' placeholder='Ingrese su número de teléfono' />
                    </div>

                    <div className="inp">
                        <label htmlFor="motivo">Motivo</label>
                        <input {...register('Motivo')} type="text" id='motivo' placeholder='Motivo por el cual se comunica' />
                    </div>

                    <div className="inp">
                        <label htmlFor="text">Déjanos un mensaje</label>
                        <textarea {...register('Texto')} id="text" cols="30" rows="5"></textarea>
                    </div>

                    <button>Enviar</button>

                </form>
            </div>
        </section>
    )
}

export default Contact