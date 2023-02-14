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
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quia ipsam dolorum, officiis consequatur doloribus temporibus vero quidem recusandae debitis quas, quis beatae sint tenetur illum? Sequi odit ut repellat?"</p>
              <div className="box__person">
                <img src={testimonial1} />
                <span>Maria Mora</span>
              </div>
            </div>
            <div className="box__bottom__testimonial"></div>
          </div>

          <div className="box__testimonials">
            <div className="text__testimonial">
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quia ipsam dolorum, officiis consequatur doloribus temporibus vero quidem recusandae debitis quas, quis beatae sint tenetur illum? Sequi odit ut repellat?"</p>
              <div className="box__person">
                <img src={testimonial2} />
                <span>Jose Rodriguez</span>
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