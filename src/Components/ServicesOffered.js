import React from "react";
import "../Styles/ServicesOffered.css";
import iconArrowRigth from "../Assets/icons/arrow-trend-up-svgrepo-com.svg";
import iconDesign from "../Assets/service_icon/design-svgrepo-com.svg";

const servicesOffered = [
  { service: "UX/UI Design", icon: iconDesign },
  { service: "UX/UI Design", icon: iconDesign },
  { service: "UX/UI Design", icon: iconDesign },
  { service: "UX/UI Design", icon: iconDesign },
];

export default function ServicesOffered() {
  return (
    <div className="container-section-services-offered d-flex flex-column">
      <div className="container-section-title d-flex justify-content-between">
        <h2 className="section-title">Services I offered</h2>
        <a className="section-service-link" href="./">
          See All Services
          <img
            className="icon-arrow"
            src={iconArrowRigth}
            alt="iconArrowRigth"
          />
        </a>
      </div>
      <div className="container-services-offered">
        {servicesOffered.map((service, index) => (
          <div key={index} className="container-service">
            <div className="container-icon-service">
              <img className="icon-service" src={service.icon} alt={`icon${service.service}`} />
            </div>
            <h5 className="service-name">{service.service}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
