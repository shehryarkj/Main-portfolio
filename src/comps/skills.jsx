// Skills.js
import React from 'react';
// import './Skills.css';

const skills = [
  { name: 'HTML', level: 100, logo: 'https://img.icons8.com/color/48/000000/html-5.png' },
  { name: 'CSS', level: 100, logo: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'JavaScript', level: 100, logo: 'https://img.icons8.com/color/48/000000/javascript.png' },
  { name: 'React.js', level: 80, logo: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'Node.js', level: 50, logo: 'https://img.icons8.com/color/48/000000/nodejs.png' },
  { name: 'Bootstrap', level: 100, logo: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
];

const Skills = () => {
  return (
    <div id='Skills' className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-content">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
