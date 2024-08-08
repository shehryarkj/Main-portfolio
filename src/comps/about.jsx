import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa';

function About() {
    return (
        <section id="about" style={{ padding: '80px 0', backgroundColor: '#f7f9fc', position: 'relative' }}>
            <Container >
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <motion.h2
                            className="display-2 mb-5"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ fontWeight: 'bold', color: '#333' }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            With a solid foundation in high school and specialized diplomas, my journey in technology has been enriching. Here’s a glimpse into my educational background:
                        </motion.p>

                        <Row id='ac' className="mt-4">
                            <Col md={6} className="mb-4">
                                <motion.div
                                    className="card border-light shadow-lg p-4"
                                    style={{ borderRadius: '12px', backgroundColor: '#fff', transition: 'transform 0.3s', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                 
                                >
                                    <h3 className="mb-3 d-flex align-items-center">
                                        <FaGraduationCap id='i' className="mr-2" style={{ color: '#007bff' }} /> Diploma in Information Technology (DIT)
                                    </h3>
                                    <p><strong>Location:</strong> Islamabad, Pakistan</p>
                                    <p>This diploma laid the foundation for my IT career, covering essential topics and providing hands-on experience in:</p>
                                    <ul className="text-left" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#666' }}>
                                        <li><strong>Fundamental IT Concepts:</strong> Including networking, databases, and system administration.</li>
                                        <li><strong>Hands-On Experience:</strong> Labs and projects focusing on troubleshooting, software installation, and system configuration.</li>
                                        <li><strong>Professional Skills:</strong> Problem-solving, effective communication, and teamwork.</li>
                                    </ul>
                                </motion.div>
                            </Col>

                            <Col md={6} className="mb-4">
                                <motion.div
                                    className="card border-light shadow-lg p-4"
                                    style={{ borderRadius: '12px', backgroundColor: '#fff', transition: 'transform 0.3s', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    id='md'
                                >
                                    <h3 className="mb-3 d-flex align-items-center">
                                        <FaCode id='i' className="mr-2" style={{ color: '#28a745' }} /> Master in MERN Stack
                                    </h3>
                                    <p><strong>Location:</strong> Lahore, Pakistan<br />
                                    <strong>Institution:</strong> Nexuss Berry</p>
                                    <p>Focused on the MERN stack, this diploma included:</p>
                                    <ul className="text-left" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#666' }}>
                                        <li><strong>MongoDB:</strong> Database management, schema design, and performance optimization.</li>
                                        <li><strong>Express.js:</strong> Server-side scripting and RESTful APIs.</li>
                                        <li><strong>React.js:</strong> Building interactive UIs with React.</li>
                                        <li><strong>Node.js:</strong> Server-side development for scalable applications.</li>
                                    </ul>
                                    <p>Noteworthy projects included:</p>
                                    <ul className="text-left" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#666' }}>
                                        <li><strong>Project 1:</strong> Responsive e-commerce website.</li>
                                        <li><strong>Project 2:</strong> Real-time chat application with notifications.</li>
                                    </ul>
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
