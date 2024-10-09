import React from "react";
import "../Styles/Sections.css";
import SectionProfil from "./SectionProfil";
import SectionExperienceSkill from "./SectionExperienceSkill";
import RecentProjects from "./RecentProjects";

export default function Sections() {
  return (
    <div className="container-all-body-sections">
      <div className="container container-first-sections">
        <div className="row g-4 ">
          <div className="first-col col-xl-4 m-xl-0">
            <SectionProfil />
          </div>
          <div className="col-xl-4 m-xl-0">
            <SectionExperienceSkill />
          </div>
          <div className="col-xl-4 m-xl-0">
            <RecentProjects />
          </div>
        </div>
      </div>
    </div>
  );
}
