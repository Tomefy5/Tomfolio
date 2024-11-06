import React, { useState } from "react";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import HeaderTools from "./HeaderTools";
import logoTomefy from "../Assets/Logo_tomefy/logo_tomefy.png";
import logoTomfolio from "../Assets/Logo_tomefy/logo_nom_tomefy.png";
import logoHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg";
import logoTomefyLigth from "../Assets/Logo_tomefy/logo_tomefy_ligth.png"
import logoTomfolioLigth from "../Assets/Logo_tomefy/logo_nom_tomefy_ligth.png"

const navbarContent = [
  {
    navigation: "Home",
    source: () => <IconHome />,
    alternative: "iconHome",
    href: "/",
  },
  {
    navigation: "About",
    source: () => <IconAbout />,
    alternative: "iconAbout",
    href: "/about",
  },
  {
    navigation: "Service",
    source: () => <IconService />,
    alternative: "iconService",
    href: "/services",
  },

  {
    navigation: "Project",
    source: () => <IconContact />,
    alternative: "iconContact",
    href: "/contact",
  },

  {
    navigation: "Contact",
    source: () => <IconContact />,
    alternative: "iconContact",
    href: "/contact",
  },
];

export default function Navbar({ navbarState, toggleNavbar ,toggleDarkTheme, darkTheme}) {
  const [activeNav, setActiveNav] = useState("");
  const handleClickActive = (href) => {
    setActiveNav(href);
  };

  return (
    <nav className={`barnav ${navbarState ? "open" : ""} ${darkTheme ? 'dark-theme' : ''}`}>
      <div className={`container-tomefy-logos ${darkTheme ? 'dark-theme' : ''}clear`}>
        <div className="container-logo-tom">
          <img className="tomefy-logo" src={darkTheme ? logoTomefyLigth : logoTomefy} alt="MyLogo" />
        </div>
        <div className="container-nom-logo" style={{ width: "45%" }}>
          <img
            className="tomefy-logo-name"
            src={darkTheme ? logoTomfolioLigth : logoTomfolio}
            alt="My logo name"
          />
        </div>
        <button className="btn-hamburger-320" onClick={toggleNavbar}>
          <img
            className="logoHamburger"
            src={logoHamburger}
            alt="logoDownload"
          />
        </button>
      </div>
      <ul className="barnav-nav">
        {navbarContent.map((nav, index) => (
          <li
            key={index}
            className={`nav-item ${activeNav === nav.href ? "active" : ""} ${darkTheme ? 'dark-theme' : ''}`}
            onClick={() => handleClickActive(nav.href)}
          >
            <NavLink to={nav.href} className={`nav-link ${darkTheme ? 'dark-theme' : ''}`} activeClassName="active">
              {nav.source()}
              {nav.navigation}
            </NavLink>
          </li>
        ))}
      </ul>
      <HeaderTools toggleDarkTheme={toggleDarkTheme}/>
    </nav>
  );
}

const IconHome = ({darkTheme}) => (
  <svg
    width="22px"
    height="22px"
    viewBox="0 0 24 24"
    fill="none"
    className={`nav-icon ${darkTheme ? 'dark-theme' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M15 18H9"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
)

const IconContact = ({darkTheme}) => (
  <svg
    fill="currentColor"
    width="22px"
    height="22px"
    className={`nav-icon ${darkTheme ? 'dark-theme' : ''}`}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M62.9891,2.5618c-0.0765-0.5779-0.6611-0.9805-1.2299-0.8401L7.4043,15.2065c-0.3535,0.0879-0.6318,0.3608-0.7256,0.7129s0.0112,0.7275,0.2744,0.9795l13.9343,13.3583l-2.7649,17.1495c-0.1079,0.6712,0.4969,1.2576,1.1582,1.1445l18.0805-3.1324l17.1832,9.6988c0.1523,0.0859,0.3218,0.1289,0.4917,0.1289c0.1523,0,0.3047-0.0347,0.4453-0.1045c0.2969-0.1475,0.5015-0.4331,0.5459-0.7617l6.9639-51.5542C63.0031,2.7372,63.0007,2.6487,62.9891,2.5618z M9.647,16.7109L56.8914,4.9902L22.2545,28.7978L9.647,16.7109z M36.9146,43.4663l-16.5942,2.875l2.4995-15.5054L58.8633,6.0615L36.9146,43.4663z M54.2427,52.6504l-15.3231-8.6492l21.4231-36.509L54.2427,52.6504z" />
    <path d="M14.4438,51.6099l-4.6948,5.209c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6948-5.209c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121C15.4463,51.1675,14.8135,51.2002,14.4438,51.6099z" />
    <path d="M5.9478,29.0562l-4.6909,5.2085c-0.3696,0.4106-0.3364,1.043,0.0742,1.4126c0.1909,0.1719,0.4302,0.2568,0.6685,0.2568c0.2739,0,0.5459-0.1113,0.7437-0.3311l4.6909-5.2085c0.3696-0.4106,0.3364-1.043-0.0742-1.4126C6.9487,28.6128,6.3179,28.6455,5.9478,29.0562z" />
    <path d="M40.8164,55.4331l-4.6909,5.2051c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6909-5.2051c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121C41.8188,54.9907,41.186,55.0234,40.8164,55.4331z" />
  </svg>
);

const IconAbout = ({darkTheme}) => (
  <svg
    width="22px"
    height="22px"
    viewBox="0 0 24 24"
    className={`nav-icon ${darkTheme ? 'dark-theme' : ''}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 17H13M9 13H13M9 9H10M17 18V21M17 15H17.01M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H13M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const IconService = ({darkTheme}) => (
  <svg
    width="22px"
    height="22px"
    className={`nav-icon ${darkTheme ? 'dark-theme' : ''}`}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>service-setting</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="invisible_box" data-name="invisible box">
        <rect width="48" height="48" fill="none" />
        <rect width="48" height="48" fill="none" />
        <rect width="48" height="48" fill="none" />
      </g>
      <g id="icons_Q2" data-name="icons Q2">
        <g>
          <path
            d="M28.7,18.8l-1.8,2.9,1.4,1.4,2.9-1.8,1,.4L33,25h2l.8-3.3,1-.4,2.9,1.8,1.4-1.4-1.8-2.9a4.2,4.2,0,0,0,.4-1L43,17V15l-3.3-.8a4.2,4.2,0,0,0-.4-1l1.8-2.9L39.7,8.9l-2.9,1.8-1-.4L35,7H33l-.8,3.3-1,.4L28.3,8.9l-1.4,1.4,1.8,2.9a4.2,4.2,0,0,0-.4,1L25,15v2l3.3.8A4.2,4.2,0,0,0,28.7,18.8ZM34,14a2,2,0,1,1-2,2A2,2,0,0,1,34,14Z"
            fill="currentColor"
          />
          <path
            d="M42.2,28.7a5.2,5.2,0,0,0-4-1.1l-9.9,1.8a4.5,4.5,0,0,0-1.4-3.3L19.8,19H5a2,2,0,0,0,0,4H18.2l5.9,5.9a.8.8,0,0,1-1.2,1.2l-3.5-3.5a2,2,0,0,0-2.8,2.8l3.5,3.5a4.5,4.5,0,0,0,3.4,1.4,5.7,5.7,0,0,0,1.8-.3h0l13.6-2.4a1,1,0,0,1,.8.2.9.9,0,0,1,.3.7,1,1,0,0,1-.8,1L20.6,36.9,9.7,28H5a2,2,0,0,0,0,4H8.3l11.1,9.1,20.5-3.7a5,5,0,0,0,2.3-8.7Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
)
