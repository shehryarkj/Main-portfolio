import React, { useEffect, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Services');
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
      id='Services'
      className={`services ${isDarkMode ? 'dark-mode' : ''}`}
      initial={{ x: '100%', opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
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
    </motion.div>
  );
};

export default Services;
