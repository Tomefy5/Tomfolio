import React from "react";
import "../Styles/Formations.css";

export default function Formations({ darkTheme }) {
  const formations = [
    {
      name: "MISA",
      type: "Academic formation",
      description:
        "I pursued my academic training at MISA, where I gained a solid foundation in mathematics and the fundamentals of IT. My studies covered networks, systems, web development, and programming, equipping me with essential skills for a career in technology.",
    },

    {
      name: "SAYNA",
      type: "Autodidact formation",
      description:
        "I undertook self-directed training at Sayna, where I honed my web development skills, focusing on JavaScript, SEO, web accessibility, and digital practices. This experience deepened my understanding of creating inclusive, optimized, and effective web applications.",
    },

    {
      name: "UDEMY",
      type: "Autodidact formation",
      description:
        "I pursued self-directed training on Udemy, focusing on React for front-end development. This experience has enhanced my skills and equipped me with the tools to create dynamic and engaging user interfaces.",
    },
  ];
  return (
    <div className="container-section-formations p-4">
      <h2 className="section-formation-title">
        Course I have taken in computer science
      </h2>
      <div className="container-formations">
        {formations.map((formation, index) => (
          <div
            className={`formation card mt-5 ${darkTheme ? "dark-theme" : ""}`}
            key={index}
          >
            <div className="card-header">
              <div
                className={`container-logo container-logo-${formation.name.toLocaleLowerCase()} me-3`}
              ></div>
              {formation.name}
            </div>
            <div className="card-body">
              <h6 className="card-title">{formation.type}</h6>
              <p className="card-text">{formation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
