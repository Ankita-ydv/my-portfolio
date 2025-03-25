// Projects.js
import React from 'react';
import './Projects.css';
import jobQuestImg from '../assets/job_quest_image.jpg';
import ossProjectImg from '../assets/oss_project_image.jpg';
import matrixGameImg from '../assets/matrix_game_image.jpg';
import focusBoardImg from '../assets/focusboard_image.jpg';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <p>Here are some of my latest works.</p>

      <div className="projects-list">
        {/* Project 1 - Job Quest */}
        <div className="project-row">
          <div className="project-image-container">
            <img src={jobQuestImg} alt="Job Quest" className="project-image" />
          </div>
          <div className="project-info">
            <h3>Job Quest</h3>
            <p>
              A job search platform that connects job seekers with potential employers.
              Features include real-time notifications and an intuitive interface.
            </p>
            <a
              href="https://github.com/your-username/job-quest"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 - OSS Document Management System */}
        <div className="project-row">
          <div className="project-image-container">
            <img src={ossProjectImg} alt="OSS Document Management System" className="project-image" />
          </div>
          <div className="project-info">
            <h3>OSS Document Management System</h3>
            <p>
              A document management system for tracking, managing, and storing documents efficiently.
              Includes metadata search and secure file handling.
            </p>
            <a
              href="https://github.com/your-username/oss-document-management"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 - Matrix Game */}
        <div className="project-row">
          <div className="project-image-container">
            <img src={matrixGameImg} alt="Matrix Game" className="project-image" />
          </div>
          <div className="project-info">
            <h3>Matrix Game</h3>
            <p>
              A fun and interactive matrix-based game that challenges users to solve
              puzzles with increasing complexity.
            </p>
            <a
              href="https://github.com/Ankita-ydv/Matrix-Game"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 4 - FocusBoard */}
        <div className="project-row">
          <div className="project-image-container">
            <img src={focusBoardImg} alt="FocusBoard" className="project-image" />
          </div>
          <div className="project-info">
            <h3>FocusBoard</h3>
            <p>
              A productivity app designed to help users stay focused and manage their tasks
              effectively through smart task boards and reminders.
            </p>
            <a
              href="https://github.com/your-username/focusboard"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
