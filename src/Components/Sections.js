import React from "react";
import "../Styles/Sections.css";
import SectionProfil from "./SectionProfil";
import SectionExperienceSkill from "./SectionExperienceSkill";
import RecentProjects from "./RecentProjects";
import ServicesOffered from "./ServicesOffered";
import iconArrowRigth from "../Assets/icons/arrow-trend-up-svgrepo-com.svg";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Sections() {
  const location = useLocation();

  return (
    <div className="container-all-body-sections">
      <div className="container container-first-sections">
        <div className="row g-4 ">
          <div className="col-xl-4 m-xl-0 mt-0">
            <SectionProfil />
          </div>
          <div className="col-xl-8 m-xl-0 variable-section">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="conatiner container-second-section mt-4 mb-4">
          <div className="row g-4">
            <div className="col-xl-8">
              <ServicesOffered />
            </div>
            <div className="col-xl-4 h-auto">
              <div className="container-let-work-together">
                <div className="container-scroll-text container-fluid">
                  Scrolling text
                </div>
                <div className="work-together-text-container">
                  <h1 className="text-work-together">
                    Let's 👋 Work Together
                  </h1>
                  <a href="#" className="let-talk-link mt-2">
                    Let's talk
                    <img
                      src={iconArrowRigth}
                      alt="iconArrowRigth"
                      className="icon-arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="row">
      <div className="col-xl-6 m-xl-0">
        <SectionExperienceSkill />
      </div>
      <div className="col-xl-6 m-xl-0">
        <RecentProjects />
      </div>
    </div>
  );
}
