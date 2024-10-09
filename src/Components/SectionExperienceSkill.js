import React from "react";
import "../Styles/SectionExperienceSkill.css";
import logoReact from "../Assets/iconCompetencies/react.svg";
import logoPhp from "../Assets/iconCompetencies/php.svg";
import logoMysql from "../Assets/iconCompetencies/mysql.svg";
import logoBootstrap from "../Assets/iconCompetencies/bootstrap.svg";
import logoGithub from "../Assets/iconCompetencies/github.svg";
import logoPython from "../Assets/iconCompetencies/python-svgrepo-com.svg";

const skills = [
  { name: "React", logo: logoReact },
  { name: "PHP", logo: logoPhp },
  { name: "MySQL", logo: logoMysql },
  { name: "Bootstrap", logo: logoBootstrap },
  { name: "Python", logo: logoPython },
  { name: "Github", logo: logoGithub },
];

export default function SectionExperienceSkill() {
  return (
    <div className="container section-work-experience-competencies">
      <div className="row section-work-experience">
        <div className="col-12">
          <h2 className="section-title">Work Experience</h2>
        </div>
      </div>
      <div className="row section-competencies">
        <div className="col-12">
          <h2 className="section-title">Expert Area</h2>
          <div className="container-competencies container mt-2">
            {skills.map((skill, index) => (
              <div key={index} className="container-competence col-4">
                <div className="container-logo-competence">
                  <img
                    className="logo-competence"
                    src={skill.logo}
                    alt={`logo${skill.name}`}
                  />
                </div>
                <h3 className="competence-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
