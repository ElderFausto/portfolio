import React, { useState } from "react";
import "./Content.css";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

const Content = () => {
  const [toggle, setToggle] = useState(0);

  const changeToggle = (number) => {
    setToggle(number);
  };

  return (
    <section className="filter container">
      <ul className="filter-content">
        <button onClick={() => setToggle(0)} className={`filter-button ${toggle === 0 ? 'active' : ''}`}>
          Projects
        </button>
        <button onClick={() => setToggle(1)} className={`filter-button ${toggle === 1 ? 'active' : ''}`}>
          Skills
        </button>
      </ul>
      <div className="filter-section">
        {toggle === 0 ? <Project /> : <Skill />}
      </div>
    </section>
  );
};

export default Content;
