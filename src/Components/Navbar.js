import React from "react";
import "../Styles/Navbar.css";
import iconHome from "../Assets/icons/home-svgrepo-com.svg";
import iconContact from "../Assets/icons/contact-papperplane-communication-svgrepo-com.svg";
import iconAbout from "../Assets/icons/file-info-alt-svgrepo-com.svg";
import iconService from "../Assets/icons/service-setting-svgrepo-com.svg";
import { Link } from "react-router-dom";
import HeaderTools from "./HeaderTools";
import logoTomefy from "../Assets/Logo_tomefy/logo_tomefy.png";
import logoTomfolio from "../Assets/Logo_tomefy/logo_nom_tomefy.png";

const navbarContent = [
  { navigation: "Home", source: iconHome, alternative: "iconHome", href: "/" },
  {
    navigation: "About",
    source: iconAbout,
    alternative: "iconAbout",
    href: "/about",
  },
  {
    navigation: "Service",
    source: iconService,
    alternative: "iconService",
    href: "/services",
  },
  {
    navigation: "Contact",
    source: iconContact,
    alternative: "iconContact",
    href: "/contact",
  },
];

export default function Navbar({navbarState}) {
  return (
    <nav className={`barnav ${navbarState ? 'open' : ''}`}>
      <div className="container-tomefy-logos">
        <div className="container-logo-tom">
          <img className="tomefy-logo" src={logoTomefy} alt="MyLogo" /> 
        </div>
        <div className="container-nom-logo" style={{width: "45%"}}>
          <img
            className="tomefy-logo-name"
            src={logoTomfolio}
            alt="My logo name"
          />
        </div>
      </div>
      <ul className="barnav-nav">
        {navbarContent.map((nav) => (
          <li className="nav-item">
            <Link to={nav.href} className="nav-link">
              <img
                src={nav.source}
                alt={`icon${nav.navigation}`}
                className="nav-icon"
              />
              {nav.navigation}
            </Link>
          </li>
        ))}
      </ul>
      <HeaderTools />
    </nav>
  );
}
