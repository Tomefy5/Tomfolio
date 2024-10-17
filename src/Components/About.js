import React from 'react'
import "../Styles/About.css"
import Formations from './Formations'
import MyInformations from './MyInformations'

export default function About() {
  return (
    <div className='container-section-about'>
        <MyInformations />
        <Formations />
    </div>
  )
}
