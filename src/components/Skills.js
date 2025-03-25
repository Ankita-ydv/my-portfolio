// Skills.js
import React from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostman, SiRedux, SiMongodb } from 'react-icons/si';
import { MdApi } from 'react-icons/md';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2>My Skills</h2>
      <p>Here are some of the technologies I've worked with:</p>
      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML5</h3>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS3</h3>
        </div>
        <div className="skill-card">
          <FaJs className="skill-icon js" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>React</h3>
        </div>
        <div className="skill-card">
          <SiRedux className="skill-icon redux" />
          <h3>Redux</h3>
        </div>
        <div className="skill-card">
          <FaJava className="skill-icon java" />
          <h3>Java</h3>
        </div>
        <div className="skill-card">
          <SiSpringboot className="skill-icon spring" />
          <h3>Spring Boot</h3>
        </div>
        <div className="skill-card">
          <MdApi className="skill-icon api" />
          <h3>REST APIs</h3>
        </div>
        <div className="skill-card">
          <SiMysql className="skill-icon mysql" />
          <h3>MySQL</h3>
        </div>
        <div className="skill-card">
          <SiMongodb className="skill-icon mongo" />
          <h3>MongoDB</h3>
        </div>
        <div className="skill-card">
          <FaGitAlt className="skill-icon git" />
          <h3>Git</h3>
        </div>
        <div className="skill-card">
          <SiPostman className="skill-icon postman" />
          <h3>Postman</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
