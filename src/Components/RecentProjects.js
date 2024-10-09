import React from "react";
import "../Styles/RecentProjects.css";
import iconArrowRigth from "../Assets/icons/arrow-trend-up-svgrepo-com.svg";
import iconMore from "../Assets/icons/more-svgrepo-com.svg";

const recentProjects = [
  { link: "./", type: "E-learning" },
  { link: "./", type: "E-commerce" },
];
export default function RecentProjects() {
  return (
    <div className="section-recent-projects d-flex flex-column">
      <div className="container-section-title-link d-flex justify-content-between">
        <h2 className="section-title">Recent Projects</h2>
        <a href="./">
          All projects
          <img
            className="logo-arrow"
            src={iconArrowRigth}
            alt="icon arrow right"
          />
        </a>
      </div>
      <div className="container-recent-projects">
        {recentProjects.map((project, index) => (
          <div className="container-project position-relative">
            <a href={project.link} className="button-more">
              <img
                className="button-icon-more"
                src={iconMore}
                alt="icon more button"
              />
            </a>
            <div className="badge badge-project">{project.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
