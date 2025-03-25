// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <h1>
        Hello, I'm <span className="highlight">Ankita</span>
      </h1>
      <p className="subtitle">Aspiring Software Developer</p>
      <button onClick={scrollToProjects}>View My Work</button>
    </div>
  );
};
export default Hero;
