import React from 'react'
import './styles/main.css'
import videoBg from '../assets/video-bg.mp4'
import { Link } from 'react-scroll'

const Main = () => {

  return (
    <main>
      <div className="content__main">
        <video className='video-bg' muted autoPlay loop src={videoBg}></video>
        <div className="capa-video"></div>
        <div className="text__main">
          <h1>Expertos en reparación e instalación de techos</h1>

          <Link to="galleryHome" spy={true} smooth={true} offset={-100} duration={500} >
            <button>Mira nuestro trabajo</button>
          </Link>

        </div>
        <div className="slogan">
          <h3>Techos & Placas, nuestro excelente trabajo nos respalda</h3>

          <button>Conocenos</button>
        </div>
      </div>
    </main>
  )
}

export default Main