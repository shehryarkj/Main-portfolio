import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa';
import '../comps/about.css';
import pic2 from '../pics/img3.1.png';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about');
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
        <section id="about" className={isDarkMode ? 'dark-mode' : ''} style={{ padding: '80px 0', position: 'relative' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <motion.h2
                            id='ch2'
                            className="display-2 mb-5"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ fontWeight: 'bold' }}
                        >
                            About Me
                        </motion.h2>
                        <motion.div
                            style={{ backgroundColor: 'transparent' }}
                            className='about-container'
                            id="db"
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={isVisible ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <div><img src={pic2} alt="Profile" /></div>
                            <div style={{ backgroundColor: 'transparent' }}>
                                <p style={{ backgroundColor: 'transparent', fontFamily: 'sans-serif' }} className="about-text">
                                    As a Frontend Developer specializing in the MERN stack, I possess a
                                    deep understanding of MongoDB, Express.js, React, and Node.js, enabling me to craft
                                    dynamic and responsive web applications with ease. My tenure at VWork Institute of
                                    Softwares in Lahore has refined my ability to translate complex requirements into
                                    intuitive, user-friendly interfaces. Proficient in leveraging modern JavaScript
                                    frameworks and libraries, I build scalable and efficient frontend solutions that
                                    prioritize high-quality, maintainable code. Committed to delivering exceptional
                                    user experiences, I am passionate about continuous learning and innovation.
                                    I thrive in collaborative settings and eagerly embrace new challenges to drive impactful results.
                                </p>
                            </div>
                        </motion.div>
                        <Row id='ac' className="mt-4">
                            <Col md={6} className="mb-4">
                                <motion.div
                                    id="md"
                                    className="card-sm border-light shadow-lg p-4 d-sm-block"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3 className="mb-3 d-flex align-items-center">
                                        <FaGraduationCap id='i' className="mr-2" style={{ color: '#007bff' }} /> Diploma in Information Technology (DIT)
                                    </h3>
                                    <p><strong>Location:</strong> Islamabad, Pakistan</p>
                                    <p>This diploma laid the foundation for my IT career. It covered essential topics like networking, databases, and system administration, and provided hands-on experience in troubleshooting, software installation, and system configuration. It also emphasized professional skills such as problem-solving, effective communication, and teamwork.</p>
                                </motion.div>
                            </Col>
                            <Col md={6} className="mb-4">
                                <motion.div
                                    id='md'
                                    className="card-sm border-light shadow-lg p-4 d-sm-block"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3 className="mb-3 d-flex align-items-center">
                                        <FaCode id='i' className="mr-2" style={{ color: '#28a745' }} /> Master in MERN Stack
                                    </h3>
                                    <p><strong>Location:</strong> Lahore, Pakistan<br />
                                        <strong>Institution:</strong> Nexuss Berry</p>
                                    <p>This diploma focused on the MERN stack, covering MongoDB for database management, Express.js for server-side scripting, React.js for building interactive UIs, and Node.js for scalable applications. Noteworthy projects included a responsive e-commerce website and a real-time chat application with notifications.</p>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
