import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill-content row">
      <div className="skill-area">
        <h3 className="skill-title">Frontend Developer</h3>
        <div className="skill-box">
          <div className="skill-group">
            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">Html</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">css</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">javascript</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">git</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">reactjs</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">vue js</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* backend */}
      <div className="skill-area">
        <h3 className="skill-title">backend Developer</h3>
        <div className="skill-box">
          <div className="skill-group">
            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">php</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">nodejs</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">python</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">firebase</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">mysql</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>

            <div className="skill-data">
              <i className="ri-checkbox-circle-line"></i>
              <div>
                <h3 className="skill-name">postgresssql</h3>
                <span className="skill-level">avançado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
