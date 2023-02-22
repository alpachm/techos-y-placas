import React from 'react'
import { Form } from 'react-router-dom'
import FormComponent from './FormComponent'
import './styles/contact.css'

const Contact = () => {

  return (
    <section className="contact" id='contactHome'>
      <div className="content__contact grilla">
        <h3>¿Interesado/a en contratarnos?</h3>
        <span>Dejanos un mensaje y lo contactaremos en el transcurso del día</span>

        <FormComponent />

      </div>
    </section>
  )
}

export default Contact