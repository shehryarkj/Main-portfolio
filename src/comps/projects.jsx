// Projects.js
import React from 'react';
// import './Projects.css';

const projects = [
  { title: 'Project 1', description: 'Description for project 1' },
  { title: 'Project 2', description: 'Description for project 2' },
  { title: 'Project 3', description: 'Description for project 3' },
  { title: 'Project 4', description: 'Description for project 4' },
  { title: 'Project 5', description: 'Description for project 5' },
  { title: 'Project 6', description: 'Description for project 6' },
  { title: 'Project 5', description: 'Description for project 7' },
  { title: 'Project 6', description: 'Description for project 8' },
];

const Projects = () => {
  return (
    <div className="projects">
      
      {projects.map((project, index) => (
        <div className="cardp" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
