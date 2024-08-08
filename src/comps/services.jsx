// Services.js
import React from 'react';


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
    <div id='Services' className="services">
     
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
