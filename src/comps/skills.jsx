import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../comps/skills.css";

const skills = [
  { name: 'HTML', level: 100, logo: 'https://img.icons8.com/color/48/000000/html-5.png' },
  { name: 'CSS', level: 100, logo: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'JavaScript', level: 100, logo: 'https://img.icons8.com/color/48/000000/javascript.png' },
  { name: 'React.js', level: 80, logo: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'Node.js', level: 50, logo: 'https://img.icons8.com/color/48/000000/nodejs.png' },
  { name: 'Bootstrap', level: 100, logo: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Skills');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <motion.div
      id='Skills'
      className={`skills ${isDarkMode ? 'dark-mode' : ''}`}
      initial={{ x: '100%', opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1>My Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <motion.img
              src={skill.logo}
              alt={skill.name}
              className="skill-logo"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="skill-details">
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
