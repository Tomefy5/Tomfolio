import React from "react";
import "../Styles/SectionExperienceSkill.css";
import logoReact from "../Assets/iconCompetencies/react.svg";
import logoPhp from "../Assets/iconCompetencies/php.svg";
import logoMysql from "../Assets/iconCompetencies/mysql.svg";
import logoBootstrap from "../Assets/iconCompetencies/bootstrap.svg";
import logoGithub from "../Assets/iconCompetencies/github.svg";
import logoPython from "../Assets/iconCompetencies/python-svgrepo-com.svg";
import logoMeta from "../Assets/Logo society/meta-svgrepo-com.svg";

const experiences = [
  {
    name: "UI/UX designer",
    years: "2022-2024",
    society: "Meta",
    logo: logoMeta,
  },
  {
    name: "UI/UX designer",
    years: "2022-2024",
    society: "Meta",
    logo: logoMeta,
  },
  {
    name: "UI/UX designer",
    years: "2022-2024",
    society: "Meta",
    logo: logoMeta,
  },
  {
    name: "UI/UX designer",
    years: "2022-2024",
    society: "Meta",
    logo: logoMeta,
  },
  
  {
    name: "UI/UX designer",
    years: "1918-1920",
    society: "Meta",
    logo: logoMeta,
  },
];

const experiencesLength = experiences.length

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
        <div className="col-12 d-flex flex-column">
          <h2 className="section-title">Work Experience</h2>
          <div className="container-experiences">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="container-experience"
                style={{
                  animationDelay: `${index * 1.2}s`,
                  "--animation-duration" : `${1.2 * experiencesLength}s`,
                  "--translate-y": experiencesLength > 4 ? `${100 * (experiencesLength - 3)}%` : "100%",
                }}
              >
                <div className="container-years">{experience.years}</div>
                <div className="container-logo-experience">
                  <img
                    className="logo-experience"
                    src={experience.logo}
                    alt={`logo${experience.society}`}
                  />
                </div>
                <div className="container-society-name">
                  <h5 className="society-name">{experience.society}</h5>
                  <h6 className="post-name">{experience.name}</h6>
                </div>
              </div>
            ))}
          </div>
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
