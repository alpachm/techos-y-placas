import React, { useState } from 'react'
import './styles/header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import logoVector from '../assets/logo-vector.svg'

const Header = () => {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [bgMenu, setBgMenu] = useState(false)
  const [displayImg, setDisplayImg] = useState('none')
  const [displaySvg, setDisplaySvg] = useState('block')

  window.addEventListener('scroll', function () {
    if (window.scrollY > 140) {
      setBgMenu(true)
      setDisplaySvg('none')
      setDisplayImg('block')
    } else {
      setBgMenu(false)
      setDisplaySvg('block')
      setDisplayImg('none')
    }
  })

  return (
    <header className={`${bgMenu && 'bg__header'}`}>
      <div className="content__header">

        <div className="logo">
          <a href="#">
            <img style={{ display: displaySvg }} src={logoVector} alt="" />
            <img style={{ display: displayImg }} src={logo} alt="" />
          </a>
          <a className={`text_logo ${bgMenu && 'color__text__logo'}`} href="#">Techos & Placas</a>
        </div>

        <nav className={`${isMenuMobile && 'active__nav'}`}>

          <a className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)} href="#">Inicio</a>

          <Link to="servicesHome" spy={true} smooth={true} offset={-100} duration={500}
            className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)}>Servicio</Link>

          <Link to="aboutUsHome" spy={true} smooth={true} offset={-100} duration={500}
            className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)}>Sobre nosotros</Link>

          <Link to="contactHome" spy={true} smooth={true} offset={-100} duration={500}
            className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)}>Contacto</Link>

          <i onClick={() => setIsMenuMobile(false)} className='bx bx-x'></i>
        </nav>

        <i onClick={() => setIsMenuMobile(true)} className={`bx bx-menu mobile ${bgMenu && 'color__menu__mobile'}`}></i>
      </div>
    </header>
  )
}

export default Header