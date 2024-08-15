import React from 'react';
import "../comps/services.css";
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Build modern and responsive websites using the latest technologies.',
    icon: '🌐'
  },
  {
    title: 'WordPress',
    description: 'Customize and develop WordPress sites tailored to your needs.',
    icon: '📝'
  },
  {
    title: 'Web Designing',
    description: 'Create visually appealing and user-friendly designs.',
    icon: '🎨'
  }
];

const Services = () => {
  // Determine if dark mode is enabled by checking a global theme context or similar method
  // This is a placeholder. Replace with actual dark mode detection logic
  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <div id='Services' className={`services ${isDarkMode ? 'dark-mode' : ''}`}>
      <motion.h2
        className="display-2 mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          fontWeight: 'bold',
          height: '150px',
          paddingTop: '150px'
        }}
      >
        My Services
      </motion.h2>
      {services.map((service, index) => (
        <div id='card' className="card" key={index}>
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
