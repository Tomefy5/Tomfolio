import React from "react";
import "../App.css";
import "../Styles/SectionProfil.css";
import logoCopy from "../Assets/icons/copy-svgrepo-com.svg";
import logoDownload from "../Assets/icons/download-minimalistic-svgrepo-com.svg";
import SocialMedia from "./SocialMedia";

const profilInformations = {
  name: "Tomefy",
  description:
    "Passionate Full Stack Developer with 2 years of experience, always evolving and ready for new challenges.",
};

export default function SectionProfil() {
  return (
    <div className="section-profil">
      <div className="container-fluid container-pdp"></div>
      <h1 className="section-profil-name">{profilInformations.name}</h1>
      <p className="section-profil-description">
        {profilInformations.description}
      </p>
      <div className="container fluid d-flex justify-content-start p-0">
        <button className="btn btn-primary me-3">
          <img className="logo" src={logoDownload} alt="logoDownload" />
          My resume
        </button>
        <button className="btn btn-outline-primary">
          <img className="logo" src={logoCopy} alt="logoCopy" />
          Copy email
        </button>
      </div>
      <SocialMedia />
    </div>
  );
}
