import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="content__footer grilla">

        <div className="box__footer">
          <h3>Sobre nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odit quo voluptas inventore nisi labore!</p>
        </div>

        <div className="box__footer">
          <h3>Contacto</h3>

          <div className="box__contact">
            <i className='bx bxs-map'></i>
            <span>Carrera 50 # 128C - 36</span>
          </div>

          <div className="box__contact">
            <i className='bx bxs-phone'></i>
            <span>(601) 9335964</span>
          </div>

          <div className="box__contact">
            <i className='bx bxs-envelope' ></i>
            <span>techosyplacas1@gmail.com</span>
          </div>

        </div>

        <div className="box__footer">
          <h3>Redes sociales</h3>

          <div className="icons__redes">
            <a href="https://www.facebook.com" target={'_blank'}><i className='bx bxl-facebook-square' ></i></a>
            <a href="https://www.instagram.com/?hl=es-la" target={'_blank'}><i className='bx bxl-instagram-alt' ></i></a>
          </div>
        </div>

        <div className="box__footer">
          <h3>Horarios</h3>

          <div className="box__horario">
            <p>Lunes a Viernes</p>
            <span>8am - 6pm</span>
          </div>

          <div className="box__horario">
            <p>Sabado</p>
            <span>9am - 2pm</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer