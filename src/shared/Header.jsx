import React, { useState } from 'react'
import './styles/header.css'
import logo from '../assets/logo.png'

const Header = () => {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [bgMenu, setBgMenu] = useState(false)

  window.addEventListener('scroll', function () {
    if (window.scrollY > 140) {
      setBgMenu(true)
    } else {
      setBgMenu(false)
    }
  })

  return (
    <header className={`${bgMenu && 'bg__header'}`}>
      <div className="content__header">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <a className={`text_logo ${bgMenu && 'color__text__logo'}`} href="#">Techos & Placas</a>
        </div>

        <nav className={`${isMenuMobile && 'active__nav'}`}>
          <a className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)} href="#">Inicio</a>
          <a className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)} href="#">Servicio</a>
          <a className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)} href="#">Sobre nosotros</a>
          <a className={`${bgMenu && 'navListActive'}`} onClick={() => setIsMenuMobile(false)} href="#">Contacto</a>
          <i onClick={() => setIsMenuMobile(false)} className='bx bx-x'></i>
        </nav>

        <i onClick={() => setIsMenuMobile(true)} className={`bx bx-menu mobile ${bgMenu && 'color__menu__mobile'}`}></i>
      </div>
    </header>
  )
}

export default Header