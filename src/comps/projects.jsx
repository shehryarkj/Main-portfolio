import React from 'react';
import { motion } from 'framer-motion';
import "../comps/projects.css";

const projects = [
  { title: 'Project 1', description: 'Description for project 1' },
  { title: 'Project 2', description: 'Description for project 2' },
  { title: 'Project 3', description: 'Description for project 3' },
  { title: 'Project 4', description: 'Description for project 4' },
  { title: 'Project 5', description: 'Description for project 5' },
  { title: 'Project 6', description: 'Description for project 6' },
  { title: 'Project 7', description: 'Description for project 7' },
  { title: 'Project 8', description: 'Description for project 8' },
];

const Projects = () => {
  // Determine if dark mode is enabled by checking a global theme context or similar method
  // This is a placeholder. Replace with actual dark mode detection logic
  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <div className={`projects-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <motion.h2
        className="display-2 mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{ fontWeight: 'bold', height: '50px' }}
      >
        Projects
      </motion.h2>
      <div className="projects">
      
      {projects.map((project, index) => (
        <div className="cardp" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
