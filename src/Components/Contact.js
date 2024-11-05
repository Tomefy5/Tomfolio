import React from 'react'
import ContactForm from "./ContactForm"
import "../Styles/Contact.css"
import MapTana from './MapTana'

export default function Contact({darkTheme}) {
  return (
    <div className={`container p-4 container-section-contact ${darkTheme ? 'dark-theme' : ''}`}>
        <ContactForm darkTheme={darkTheme}/>
        <MapTana darkTheme={darkTheme}/>
    </div>
  )
}