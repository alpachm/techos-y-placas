import React, { useState } from 'react'
import './styles/gallery.css'
import techo1 from '../assets/images-gallery/techo-1.jpg'
import techo2 from '../assets/images-gallery/techo-2.jpg'
import techo3 from '../assets/images-gallery/techo-3.jpg'
import techo4 from '../assets/images-gallery/techo-4.jpg'
import techo5 from '../assets/images-gallery/techo-5.jpg'
import techo6 from '../assets/images-gallery/techo-6.jpg'
import techo7 from '../assets/images-gallery/techo-7.jpg'
import techo8 from '../assets/images-gallery/techo-8.jpg'

const Gallery = () => {

  const [showImgInfo, setShowImgInfo] = useState(false)
  const [showImgInfo2, setShowImgInfo2] = useState(false)
  const [showImgInfo3, setShowImgInfo3] = useState(false)
  const [showImgInfo4, setShowImgInfo4] = useState(false)
  const [showImgInfo5, setShowImgInfo5] = useState(false)
  const [showImgInfo6, setShowImgInfo6] = useState(false)
  const [showImgInfo7, setShowImgInfo7] = useState(false)
  const [showImgInfo8, setShowImgInfo8] = useState(false)

  return (
    <section className="gallery" id='galleryHome'>

      <div className="content__gallery">

        <div className="text__gallery grilla">

          <h3>Nuestro trabajo</h3>
          <span>Porque una foto vale mas que mil palabras, mira nuestra galería de trabajos</span>
          <i className='bx bx-chevrons-down'></i>

        </div>
        <div className="images__gallery">

          <div onMouseEnter={() => setShowImgInfo(true)} onMouseLeave={() => setShowImgInfo(false)} className="img_contain">
            <img src={techo1} alt="impermeabilizacion de cubierta" />
            <div className={`img__info ${showImgInfo && 'show__img__info'}`}>
              <span>Impermeabilización de techo</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo2(true)} onMouseLeave={() => setShowImgInfo2(false)} className="img_contain">
            <img src={techo2} alt="techo de garaje" />
            <div className={`img__info ${showImgInfo2 && 'show__img__info'}`}>
              <span>Techo de policarbonato</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo3(true)} onMouseLeave={() => setShowImgInfo3(false)} className="img_contain">
            <img src={techo3} alt="techo de vidrio" />
            <div className={`img__info ${showImgInfo3 && 'show__img__info'}`}>
              <span>Techo de vidrio</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo4(true)} onMouseLeave={() => setShowImgInfo4(false)} className="img_contain">
            <img src={techo4} alt="impermeabilizacion de cubierta" />
            <div className={`img__info ${showImgInfo4 && 'show__img__info'}`}>
              <span>Impermeabilización de cubierta</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo5(true)} onMouseLeave={() => setShowImgInfo5(false)} className="img_contain">
            <img src={techo5} alt="techo en shingle" />
            <div className={`img__info ${showImgInfo5 && 'show__img__info'}`}>
              <span>Instalación teja de shingle</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo6(true)} onMouseLeave={() => setShowImgInfo6(false)} className="img_contain">
            <img src={techo6} alt="techo en shingle" />
            <div className={`img__info ${showImgInfo6 && 'show__img__info'}`}>
              <span>Instalación teja termoacústica</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo7(true)} onMouseLeave={() => setShowImgInfo7(false)} className="img_contain">
            <img src={techo7} alt="teja termoacustica" />
            <div className={`img__info ${showImgInfo7 && 'show__img__info'}`}>
              <span>Instalación teja termoacústica</span>
              <button>Más info</button>
            </div>
          </div>

          <div onMouseEnter={() => setShowImgInfo8(true)} onMouseLeave={() => setShowImgInfo8(false)} className="img_contain">
            <img src={techo8} alt="marquesina" />
            <div className={`img__info ${showImgInfo8 && 'show__img__info'}`}>
              <span>Instalación techo de vidrio</span>
              <button>Más info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery