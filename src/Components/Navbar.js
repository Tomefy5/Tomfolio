import React, { useState } from "react";
import "../Styles/Navbar.css";
import iconHome from "../Assets/icons/home-svgrepo-com.svg";
import iconContact from "../Assets/icons/contact-papperplane-communication-svgrepo-com.svg";
import iconAbout from "../Assets/icons/file-info-alt-svgrepo-com.svg";
import iconService from "../Assets/icons/service-setting-svgrepo-com.svg"
import iconHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg"

const initialNavbarContent = [
  { navigation: "Home", source: iconHome, alternative: "iconHome", href: "./" },
  { navigation: "About", source: iconAbout, alternative: "iconAbout", href: "./" },
  { navigation: "Service", source: iconService, alternative: "iconService", href: "./" },
  { navigation: "Contact", source: iconContact, alternative: "iconContact", href: "./" },
];

export default function Navbar() {
  const [navbarContent] = useState(initialNavbarContent);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img className="icon-hamburger" src={iconHamburger} alt="iconHamburger" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navbarContent.map((item, index) => (
              <li className="nav-item">
                <a href={item.href} className="nav-link">
                  <span className="container-icon">
                    <img className="icon" src={item.source} alt={item.alternative} />
                  </span>
                  { item.navigation }
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
