import React, { useState } from "react";
import DarkTheme from "../DarkTheme/DarkTheme";

import ProfilePicture from "../../images/hero.jpg";
import CV from "../../images/Curriculo Att.pdf";
import "./Hero.css";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  return (
    <header className="profile container">
      <DarkTheme onClick={() => setToggle(!toggle)} toggle={toggle} />
      <div className="row profile-container">
        <div className="profile-border">
          <div className="profile-picture">
            <img src={ProfilePicture} alt="élder" />
          </div>
        </div>
        <div className="profile-data">
          <h2 className="profile-name">Élder Fausto</h2>
          <h3 className="profile-profession">Frontend Developer</h3>

          <ul className="profile-social">
            <a
              href="https://www.linkedin.com/in/elderfausto/"
              target={"_blank"}
              className="profile-social-link"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://github.com/ElderFausto"
              target={"_blank"}
              className="profile-social-link"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=558187478259&text="
              target={"_blank"}
              className="profile-social-link"
            >
              <i className="ri-whatsapp-fill"></i>
            </a>
            <a
              href="https://elderfavsto@gmail.com"
              target={"_blank"}
              className="profile-social-link"
            >
              <i className="ri-mail-fill"></i>
            </a>
          </ul>
        </div>
        <div className="profile-info row">
          <div className="profile-info-group">
            <h3 className="profile-info-number">+3</h3>
            <p className="profile-info-description">
              Experiences of <br /> work
            </p>
          </div>

          <div className="profile-info-group">
            <h3 className="profile-info-number">+50</h3>
            <p className="profile-info-description">
              Created of of <br /> projects
            </p>
          </div>

          <div className="profile-info-group">
            <h3 className="profile-info-number">+45</h3>
            <p className="profile-info-description">
              Successfully of <br /> projects
            </p>
          </div>
        </div>
        <div className="profile-button">
          <a href={CV} download className="button">
            Download CV <i className="ri-download-line"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
