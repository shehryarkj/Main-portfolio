import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import "../comps/nav.css";
import pic1 from '../pics/img3.jpg'

function Navbare() {
  return (
    <Navbar id='nav1' expand="lg" bg="white" variant="light" style={navbarStyle}>
      <Container >
        <Navbar.Brand href="#home">
          <img
          style={{
            width:'70px',
            borderRadius:'50%',
            
          }}
          src={pic1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={100}
                  style={linkStyle}
                  id='n3'
                >
                  {item.label}
                </ScrollLink>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Navbar Styling
const navbarStyle = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  position: 'fixed', // Keeps navbar fixed
  top: 0,           // Aligns navbar to top
  width: '100%',    // Ensures navbar spans full width
  zIndex: 1000,     // Keeps navbar on top of other content
};

// Link Styling
const linkStyle = {
  cursor: 'pointer',
  color: 'black',
  fontSize: '1.25rem',
  textDecoration: 'none',
  transition: 'color 0.3s ease, transform 0.3s ease',
  margin: '0 1rem',
 
  
};

// Navigation Items
const navItems = [
  { id: 'home', to: 'intro', label: 'Home' },
  { id: 'about', to: 'about', label: 'About' },
  { id: 'projects', to: 'projects', label: 'Projects' },
  { id: 'services', to: 'services', label: 'Services' },
  { id: 'contact', to: 'contact', label: 'Contact' },
];

export default Navbare;
