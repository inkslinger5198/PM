import React from "react";
import "./about.css";
import PB from "../../assets/Founder/PB.jpg";
import { TiBusinessCard } from "react-icons/ti";
import { IoCheckmarkDone } from "react-icons/io5";
const About = () => {
  return (
    <div className="about-founder section__padding" id="about">
      <div className="about-founder-heading">
        <h1>Meet The Founder</h1>
      </div>

      <div className="about-founder-content">
        <div className="about-founder-content_data">
          <div className="data-header">
            <TiBusinessCard className="icon" />
            <h1>Pravit Bhatia</h1>
          </div>
          <p>
            Pravit Bhatia is the founder of Progressor Media, a leading digital
            marketing agency specializing in helping IT firms expand their
            clientele through an innovative AI-based approach known as
            SmartLink. Pravit's forward-thinking leadership has positioned
            Progressor Media as a trailblazer in the industry, leveraging
            artificial intelligence to redefine traditional marketing
            strategies. Under his guidance, the agency thrives on delivering
            personalized solutions and fostering a culture of collaboration and
            innovation. 
          </p>

          <ul>              
            <li>
              <div className="pointer">
                <IoCheckmarkDone className="bullet" />
                <p>Innovative and data-driven marketing strategies</p>
              </div>
            </li>
            <li>
              <div className="pointer">
                <IoCheckmarkDone className="bullet" />
                <p>Collaborative partnerships with industry leaders</p>
              </div>
            </li>
            <li>
              <div className="pointer">
                <IoCheckmarkDone className="bullet" />
                <p>Continuous adaptation to emerging trends and technologies</p>
              </div>
            </li>
            <li>
              <div className="pointer">
                <IoCheckmarkDone className="bullet" />
                <p>
                  Proven track record of increasing brand visibility and
                  engagement
                </p>
              </div>
            </li>
            <li>
              <div className="pointer">
                <IoCheckmarkDone className="bullet" />
                <p>Transparent reporting and regular performance evaluations</p>
              </div>
            </li>
            
          </ul>
        </div>

        <div className="about-founder-content_img">
          <img src={PB} alt="Founder" />
        </div>
      </div>
    </div>
  );
};

export default About;
