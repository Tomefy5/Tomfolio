import React from 'react'
import ContactForm from "./ContactForm"
import "../Styles/Contact.css"
import MapTana from './MapTana'

export default function Contact() {
  return (
    <div className="container p-4 container-section-contact">
        <ContactForm />
        <MapTana />
    </div>
  )
}
