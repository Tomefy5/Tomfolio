import React, { useState } from "react";
import "../Styles/Navbar.css";
import iconHome from "../Assets/icons/home-svgrepo-com.svg";
import iconContact from "../Assets/icons/contact-papperplane-communication-svgrepo-com.svg";
import iconAbout from "../Assets/icons/file-info-alt-svgrepo-com.svg";
import iconService from "../Assets/icons/service-setting-svgrepo-com.svg";
import { Link } from "react-router-dom";

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

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navbarContent.map((nav) => (
          <li className="nav-item">
            <img src={nav.source} alt={`icon${nav.navigation}`} className="nav-icon" />
            <Link to={nav.href} className="nav-link">
              {nav.navigation}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
