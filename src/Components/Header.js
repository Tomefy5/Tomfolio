import React, { useState } from 'react'
import "../Styles/Header.css"
import logoTomefy from "../Assets/Logo_tomefy/logo_tomefy.png"
import logoTomfolio from "../Assets/Logo_tomefy/logo_nom_tomefy.png"
import Navbar from './Navbar'
import logoHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg"

export default function Header() {

  const [isNavbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen)
  }

  return (
    <header className='header-navbar container-fluid'>
        <div className='container-logo-tom'>
          <img className='tomefy-logo' src={logoTomefy} alt="MyLogo" />
        </div>
        <div className='container-nom-logo'>
          <img className='tomefy-logo-name' src={logoTomfolio} alt="My logo name" />
        </div>
        <Navbar navbarState={isNavbarOpen} toggleNavbar={toggleNavbar}/>
        <button className='btn-hamburger' onClick={toggleNavbar} >
          <img className='logoHamburger' src={logoHamburger} alt="logoDownload" />
        </button>
    </header>
  )
}
