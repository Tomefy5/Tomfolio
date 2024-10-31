import React from "react";
import "../Styles/Services.css";
import iconDesign from "../Assets/service_icon/design-svgrepo-com.svg";
import logoReact from "../Assets/iconCompetencies/react.svg";
import logoPhp from "../Assets/iconCompetencies/php.svg";
import logoMysql from "../Assets/iconCompetencies/mysql.svg";
import logoBootstrap from "../Assets/iconCompetencies/bootstrap.svg";
import logoGithub from "../Assets/iconCompetencies/github.svg";
import logoPython from "../Assets/iconCompetencies/python-svgrepo-com.svg";

const servicesOffered = [
  { service: "UX/UI Design", icon: iconDesign },
  { service: "SEO", icon: iconDesign },
  { service: "Back-end development", icon: iconDesign },
  { service: "Website Maintenance", icon: iconDesign },
];

export default function Services() {
  const skills = [
    { name: "React", logo: logoReact },
    { name: "PHP", logo: logoPhp },
    { name: "MySQL", logo: logoMysql },
    { name: "Bootstrap", logo: logoBootstrap },
    { name: "Python", logo: logoPython },
    { name: "Github", logo: logoGithub },
  ];
  return (
    <div className="container-section-service p-4">
      <h2 className="section-service-title">Services I offered</h2>
      <p className="services-descri">
        Bringing Concepts to Life: Enhance Your Vision with Our Skilled Product
        Design and Development Solutions!
      </p>
      <div className="container-services-offered mt-4">
        {servicesOffered.map((service, index) => (
          <div key={index} className="container-service">
            <div className="container-icon-service">
              <img
                className="icon-service"
                src={service.icon}
                alt={`icon${service.service}`}
              />
            </div>
            <h5 className="service-name">{service.service}</h5>
          </div>
        ))}
      </div>
      <h3 className="setion-technologies-title mt-4">Technologies I Use</h3>
      <div className="container-competencies container row m-auto mt-4 h-auto">
        {skills.map((skill, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-6">
            <div className="container-logo-competence2">
              <img
                className="logo-competence2"
                src={skill.logo}
                alt={`logo${skill.name}`}
              />
            </div>
            <h3 className="competence-name2">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
