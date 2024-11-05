import React from 'react'
import "../Styles/About.css"
import Formations from './Formations'
import MyInformations from './MyInformations'

export default function About({darkTheme}) {
  return (
    <div className={`container-section-about ${darkTheme ? 'dark-theme': ''}`}>
        <MyInformations darkTheme={darkTheme}/>
        <Formations darkTheme={darkTheme}/>
    </div>
  )
}