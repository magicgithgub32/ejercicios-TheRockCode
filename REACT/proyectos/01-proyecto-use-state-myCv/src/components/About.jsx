import React from "react";
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className='about-card'>
      {hero.aboutMe.map((item) => {
        return (
          <div key="">
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About