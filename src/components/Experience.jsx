import React from 'react'
import './styles/experience.css'

const Experience = () => {
    return (
        <section className="experience">
            <div className="content__experience grilla">
                <div className="text__experience">
                    <i className='bx bx-list-check'></i>
                    <span>El conocimiento nos respalda</span>
                    <h3>Experiencia y certificaciones</h3>
                </div>
                <div className="boxes__experience">

                    <div className="box__experience">
                        <h3>Buen trabajo garantizado</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur!</p>
                        <i className='bx bxs-hard-hat'></i>
                    </div>

                    <div className="box__experience">
                        <h3>Certificaciones al día</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur! Lorem ipsum dolor sit amet.</p>
                        <i className='bx bxs-copy-alt'></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience