import React from 'react'
import './styles/services.css'
import imperabilizacion from '../assets/images-services/impermeabilizacion.jpg'
import reparacion from '../assets/images-services/reparacion.jpg'
import instalacion from '../assets/images-services/instalacion.jpg'
import goteras from '../assets/images-services/goteras.jpg'

const Services = () => {
  return (
    <section className="services" id='servicesHome'>
      <div className="content__services grilla">

        <div className="text__services__head">
          <i className='bx bxs-building-house'></i>
          <span>Selecciona el servicio que necesite</span>
          <h3>Contamos con una gran variedad de servicios</h3>
        </div>

        <div className="boxes__services">
          <div className="box__service">
            <div className="text__services">
              <span>Impermeabilización</span>
              <h3>Impermeabilización & mantenimiento sobre:</h3>
              <div className="service__list">
                <span>Cubiertas</span>
                <span>Placas</span>
                <span>Canales</span>
                <span>Vigas canales</span>
                <span>Techos</span>
                <span>Tejas</span>
                <span>Paredes</span>
                <span>Tanques</span>
                <span>Materas</span>
              </div>

              <div className="btn__services">
                <span>Me interesa</span>
                <i className='bx bx-chevrons-right'></i>
              </div>

            </div>

            <img src={imperabilizacion} alt="impermeabilizacion de techo" />
          </div>

          <div className="box__service">
            <div className="text__services">
              <span>Reparación</span>
              <h3>Reparación de techos & tejas en:</h3>
              <div className='service__list'>
                <span>Barro</span>
                <span>Termoacústica</span>
                <span>Fibro cemento</span>
                <span>Shingle</span>
                <span>Adecuación y reforzamiento de techos</span>
              </div >

              <div className="btn__services">
                <span>Me interesa</span>
                <i className='bx bx-chevrons-right'></i>
              </div>

            </div>
            <img src={reparacion} alt="reparacion de techos" />
          </div>

          <div className="box__service">
            <div className="text__services">
              <span>Instalación</span>
              <h3>Instalación & reparación de marquesinas:</h3>
              <div className="service__list">
                <span>Tejas plásticas</span>
                <span>Policatbonato</span>
                <span>Vidrio</span>
                <span>ACrílico</span>
                <span>Domos</span>
                <span>Pérgolas</span>
                <span>Galvanizado</span>
              </div>

              <div className="btn__services">
                <span>Me interesa</span>
                <i className='bx bx-chevrons-right'></i>
              </div>


            </div>
            <img src={instalacion} alt="instalacion de techos" />
          </div>

          <div className="box__service">
            <div className="text__services">
              <span>Reparación</span>
              <h3>Reparación de goteras & húmedades sobre:</h3>
              <div className="service__list">
                <span>Techos</span>
                <span>Placas</span>
                <span>Marquesinas</span>
                <span>Canales</span>
                <span>Bajantes</span>
                <span>Vigas Canales</span>
                <span>Muros</span>
              </div>

              <div className="btn__services">
                <span>Me interesa</span>
                <i className='bx bx-chevrons-right'></i>
              </div>

            </div>
            <img src={goteras} alt="reparacion de goteras" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services