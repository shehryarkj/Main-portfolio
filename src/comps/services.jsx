// Services.js
import React from 'react';
import "../comps/services.css"
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
  return (
<>

    
    <div id='Services' className="services">
    <motion.h2
                            className="display-2 mb-5"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                               fontWeight: 'bold',
                                color: '#333',
                                height:'150px',
                                paddingTop:'150px',
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
    </>
  );
};

export default Services;
