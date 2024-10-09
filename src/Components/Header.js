import React from 'react'
import "../Styles/Header.css"
import logoTomefy from "../Assets/Logo_tomefy/logo_tomefy.png"
import logoTomfolio from "../Assets/Logo_tomefy/logo_nom_tomefy.png"
import Navbar from './Navbar'
import HeaderTools from './HeaderTools'

export default function Header() {

  return (
    <header className='header-navbar container-fluid position-relative'>
        <div className='container-logo'>
          <img className='tomefy-logo' src={logoTomefy} alt="MyLogo" />
        </div>
        <div className='container-nom-logo'>
          <img className='tomefy-logo-name' src={logoTomfolio} alt="My logo name" />
        </div>
        <Navbar />
        <HeaderTools />
    </header>
  )
}
