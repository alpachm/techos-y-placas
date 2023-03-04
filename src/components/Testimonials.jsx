import React from 'react'
import './styles/testimonials.css'
import testimonial1 from '../assets/images-testimonial/testimonial-1.jpg'
import testimonial2 from '../assets/images-testimonial/testimonial-2.jpg'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="content__testimonial grilla">
        <h3>Testimonios</h3>
        <div className="boxes__testimonials">

          <div className="box__testimonials">
            <div className="text__testimonial">
              <p>"Techos y placas gracias, me dieron la oportunidad de volver a disfrutar mi hogar con mi nuevo tejado"</p>
              <div className="box__person">
                <img src={testimonial1} />
                <span>Anidis Madrid</span>
              </div>
            </div>
            <div className="box__bottom__testimonial"></div>
          </div>

          <div className="box__testimonials">
            <div className="text__testimonial">
              <p>"Excelente empresa, realizan un trabajo de calidad. Cumplieron con todo lo acordado, luego de que ellos impermeabilizaron mi tejado no tuve más problemas de goteras. 100% recomendados"</p>
              <div className="box__person">
                <img src={testimonial2} />
                <span>Dimas Vargas</span>
              </div>
            </div>
            <div className="box__bottom__testimonial"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials