import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Copyright from './components/Copyright'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import RegistroForm from './pages/RegistroForm'

function App() {

  const [isArrowTop, setIsArrowTop] = useState(false)
  const [isRedesSociales, setIsRedesSociales] = useState(false)
  const [showBtnWsp, setShowBtnWsp] = useState(false)

  window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
      setIsArrowTop(true)
    } else {
      setIsArrowTop(false)
    }
  })

  setTimeout(() => {
    setIsRedesSociales(true)
    setShowBtnWsp(true)
  }, 6000);

  return (
    <div className="App">

      <div className={`redes_sociales_float ${isRedesSociales && 'show_redes_float'}`}>
        <a href="https://www.facebook.com" target={'_blank'}> <i className='bx bxl-facebook-square' ></i></a>
        <a href="https://www.instagram.com/?hl=es-la" target={'_blank'}> <i className='bx bxl-instagram-alt' ></i></a>
      </div>

      <a className={`btn__wsp ${showBtnWsp && 'show__btn__wsp'}`} href="#">
        <a href="https://web.whatsapp.com" target={'_blank'}><i className='bx bxl-whatsapp'></i></a>
      </a>

      <a className={`arrow_top ${isArrowTop && 'show_arrow_top'}`} href="#">
        <i className={`bx bx-chevrons-up ${isArrowTop && 'show_arrow_top'}`}></i>
      </a>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro-formulario' element={<RegistroForm />} />
      </Routes>

      <Footer />
      <Copyright />
    </div>
  )
}

export default App
