import React from "react";
import "../Styles/RecentProjects.css";
import iconMore from "../Assets/icons/more-svgrepo-com.svg";
import IconArrowRigth from "./IconArrowRigth"; 

const recentProjects = [
  { link: "./", type: "E-learning" },
  { link: "./", type: "E-commerce" },
];
export default function RecentProjects({darkTheme}) {
  return (
    <div className={`section-recent-projects d-flex flex-column ${darkTheme ? 'dark-theme' : ''}`}>
      <div className="container-section-title-link d-flex justify-content-between">
        <h2 className="section-title">Recent Projects</h2>
        <a href="./">
          All projects
          <IconArrowRigth />
        </a>
      </div>
      <div className="container-recent-projects">
        {recentProjects.map((project, index) => (
          <div key={index} className="container-project position-relative">
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


