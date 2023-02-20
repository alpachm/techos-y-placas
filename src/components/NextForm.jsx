import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/nextForm.css'

const NextForm = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/')
    }

    return (
        <div className='next__form'>
            <div className="content__next__form grilla">
                <i className='bx bx-check-square'></i>
                <h1>Hemos recibido su mensaje, <span>lo comunicaremos en las próximas horas</span> </h1>
                <button onClick={handleSubmit}>Regresar</button>
            </div>
        </div>
    )
}

export default NextForm