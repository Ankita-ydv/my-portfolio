// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        I’m a passionate <span className="highlight">Software Developer</span> eager to contribute to innovative projects, and continuously expanding expertise in modern technologies. 
        Previously worked as a RAN Engineer for 2 years, bringing a problem solving mindset and attention to detail.
        </p>
        <div className="about-stats">
          <div className="stat">
            <h3>3+</h3>
            <p>Courses</p>
            
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Technologies Mastered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
