import React, { useState } from 'react'
import "../Styles/Header.css"
import logoTomefy from "../Assets/Logo_tomefy/logo_tomefy.png"
import logoTomefyLigth from "../Assets/Logo_tomefy/logo_tomefy_ligth.png"
import logoTomfolio from "../Assets/Logo_tomefy/logo_nom_tomefy.png"
import logoTomfolioLigth from "../Assets/Logo_tomefy/logo_nom_tomefy_ligth.png"
import Navbar from './Navbar'
import logoHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg"

export default function Header({toggleDarkTheme, darkTheme}) {

  const [isNavbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen)
  }

  return (
    <header className={`header-navbar container-fluid ${darkTheme ? 'dark-theme' : ''}`}>
        <div className={`container-logo-tom ${darkTheme ? 'dark-theme' : ''}`}>
          <img className='tomefy-logo' src={darkTheme ? logoTomefyLigth : logoTomefy  } alt="MyLogo" />
        </div>
        <div className={`container-nom-logo ${darkTheme ? 'dark-theme' : ''}`}>
          <img className='tomefy-logo-name' src={darkTheme ? logoTomfolioLigth : logoTomfolio} alt="My logo name" />
        </div>
        <Navbar navbarState={isNavbarOpen} toggleNavbar={toggleNavbar} toggleDarkTheme={toggleDarkTheme} darkTheme={darkTheme}/>
        <button className='btn-hamburger' onClick={toggleNavbar} >
          <img className='logoHamburger' src={logoHamburger} alt="logoDownload" />
        </button>
    </header>
  )
}