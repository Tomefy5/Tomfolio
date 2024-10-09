import React, { useState } from "react";
import "../Styles/SocialMedia.css";
import logoFacebook from "../Assets/icons/facebook.svg";
import logoGithhub from "../Assets/icons/github.svg";
import logoLinkedin from "../Assets/icons/linkedin.svg";

const initialSocialMedia = [
  { name: "facebook", logo: logoFacebook, href: "./" },
  { name: "github", logo: logoGithhub, href: "./" },
  { name: "linkedin", logo: logoLinkedin, href: "./" },
];

export default function SocialMedia() {
  const [socialMedia] = useState(initialSocialMedia);

  return (
    <div className="container-social-link container-fluid p-0">
      {socialMedia.map((item, index) => (
        <a key={index} className="social-media-link" href={item.href}>
          <div className="container-logo-social-media">
            <img className="logo" src={item.logo} alt={`logo${item.name}`} />
          </div>
        </a>
      ))}
    </div>
  );
}
