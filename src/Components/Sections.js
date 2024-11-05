import React from "react";
import "../Styles/Sections.css";
import SectionProfil from "./SectionProfil";
import SectionExperienceSkill from "./SectionExperienceSkill";
import RecentProjects from "./RecentProjects";
import ServicesOffered from "./ServicesOffered";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import IconArrowRigth from "./IconArrowRigth";

export default function Sections({darkTheme}) {
  const location = useLocation();

  return (
    <div className="container-all-body-sections">
      <div className="container container-first-sections">
        <div className="row g-4 ">
          <div className="col-xl-4 m-xl-0 mt-0">
            <SectionProfil darkTheme={darkTheme} />
          </div>
          <div className="col-xl-8 m-xl-0 variable-section">
            <Routes>
              <Route path="/" element={<Home darkTheme={darkTheme} />}></Route>
              <Route path="/about" element={<About darkTheme={darkTheme}/>}></Route>
              <Route path="/services" element={<Services darkTheme={darkTheme}/>}></Route>
              <Route path="/contact" element={<Contact darkTheme={darkTheme}/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="conatiner container-second-section mt-4 mb-4">
          <div className="row g-4">
            <div className="col-xl-8">
              <ServicesOffered darkTheme={darkTheme} />
            </div>
            <div className="col-xl-4 h-auto">
              <div className={`container-let-work-together ${darkTheme ? 'dark-theme': ''}`}>
                <ScrollingText darkTheme={darkTheme}/>
                <div className="work-together-text-container">
                  <h1 className={`text-work-together ${darkTheme ? 'dark-theme' : ''}`}>Let's 👋 Work Together</h1>
                  <Link to={"/contact"} className="let-talk-link mt-2">
                    Let's talk
                    <IconArrowRigth />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Home({darkTheme}) {
  return (
    <div className="row">
      <div className="col-xl-6 m-xl-0">
        <SectionExperienceSkill darkTheme={darkTheme}/>
      </div>
      <div className="col-xl-6 m-xl-0">
        <RecentProjects darkTheme={darkTheme}/>
      </div>
    </div>
  );
}

const ScrollingText = () => {
  const scrollingText = "Bonjour le monde";

  return (
    <div className="container-scroll-text container-fluid">
      <p className="scroll-text m-0">
        {scrollingText.split("").map((letter, index) => (
          <span key={index} style={{animationDelay: `${index * 0.05}s`}}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}
