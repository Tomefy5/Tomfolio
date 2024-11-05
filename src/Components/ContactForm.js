import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/ContactForm.css";

const ContactForm = ({darkTheme}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_91ath9j";
    const templateID = "template_rhtd7dg";
    const userID = "Qv3q_YvW8TftVEt2S";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Votre message a été envoyé avec succès !");
      },
      (err) => {
        console.error("FAILED...", err);
        alert("Échec de l'envoi du message. Veuillez réessayer.");
      }
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h2 className="section-contact-title">Let's work together</h2>
      <p className="section-contact-descri">
        I’d love to hear from you! Whether you have questions, collaboration
        ideas, or just want to connect, feel free to reach out!
      </p>
      <form className={`contact-form p-3 ${darkTheme ? 'dark-theme' : ''}`} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${darkTheme ? 'dark-theme' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name..."
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${darkTheme ? 'dark-theme' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address..."
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className={`form-control ${darkTheme ? 'dark-theme' : ''}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder="Type details about your inquiry..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
