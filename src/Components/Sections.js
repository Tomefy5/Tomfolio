import React from "react";
import "../Styles/Sections.css";
import SectionProfil from "./SectionProfil";
import SectionExperienceSkill from "./SectionExperienceSkill";
import RecentProjects from "./RecentProjects";
import ServicesOffered from "./ServicesOffered";
import iconArrowRigth from "../Assets/icons/arrow-trend-up-svgrepo-com.svg";

export default function Sections() {
  return (
    <div className="container-all-body-sections">
      <div className="container container-first-sections">
        <div className="row g-4 ">
          <div className="col-xl-4 m-xl-0">
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
      <div className="conatiner container-second-section mt-4 mb-4">
        <div className="row g-4">
          <div className="col-xl-8">
            <ServicesOffered />
          </div>
          <div className="col-xl-4">
            <div className="container-let-work-together">
              <div className="container-scroll-text container-fluid">Scrolling text</div>
              <div className="work-together-text-container">
                <span className="text-work-together w-75">Let's 👋 Work Together</span>
                <a href="#" className="let-talk-link mt-2">
                  Let's talk
                  <img src={iconArrowRigth} alt="iconArrowRigth" className="icon-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
