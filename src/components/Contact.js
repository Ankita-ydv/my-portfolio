// Contact.js
import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-items-container">
        {/* LinkedIn */}
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon linkedin" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <a
            href="https://github.com/your-github-id"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon github" />
            <span>View my GitHub</span>
          </a>
        </div>

        {/* Email */}
        <div className="contact-item">
          <a
            href="mailto:your-email@example.com"
            className="contact-link"
          >
            <FaEnvelope className="contact-icon email" />
            <span>Email me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
