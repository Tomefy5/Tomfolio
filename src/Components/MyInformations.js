import React from "react";
import "../Styles/MyInformations.css";

export default function MyInformations({darkTheme}) {
  const myInformations = {
    "Last Name" : "ANDRY TSIRESY ANDRIAMBONIHAJA",
    "First Name" : "Tomefy Ny Soa",
    "Age" : "19",
    "From" : "Madagascar, Antananarivo",
    "Freelance": "Available"
  }

  return (
    <div className="container-section-info-perso p-4">
      <h2 className="info-perso-title">Who am I ?</h2>
      <div className="container-info-perso-descri row">
        <div className="col-xl-6">
          <p className="info-perso-descri">
            <h3 className={`info-perso-descri-title ${darkTheme ? 'dark-theme' : ''}`}>
              Hi, I’m Tomefy, a Developer.
            </h3>
            I’ve learned computer science through self-study, which has fueled
            my passion for building responsive, user-friendly websites. I'm
            always evolving, exploring new technologies, and pushing my creative
            and technical limits. I love creating dynamic web experiences and
            continuously learning to improve my skills and deliver better
            projects.
          </p>
        </div>
        <div className="col-xl-6">
          <ul class="list-group">
            {
              Object.entries(myInformations).map(([key, value], index) => (
                <li key={index} class={`list-group-item ${darkTheme ? 'dark-theme' : ''}`}>
                  <strong>{key}:</strong> {value}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
