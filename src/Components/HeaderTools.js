import React from "react";
import "../Styles/HeaderTools.css";
import iconBrightness from "../Assets/icons/sun-2-svgrepo-com.svg";
import iconToTalk from "../Assets/icons/arrow-u-down-right-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function HeaderTools({toggleDarkTheme}) {
  return (
    <div className="container-header-tools row">
      <div className="container-tool-brightness col-3">
        <button className="btn-brightness" onClick={toggleDarkTheme}>
          <img
            className="icon-brightness"
            src={iconBrightness}
            alt="icon brightness"
          />
        </button>
      </div>
      <div className="container-tool-to-talk col-9">
        <Link className="to-talk-link" to="/contact">
          <span className="to-talk-text">Let's Talk</span>
          <img className="icon-to-talk" src={iconToTalk} alt="iconToTalk" />
        </Link>
      </div>
    </div>
  );
}
