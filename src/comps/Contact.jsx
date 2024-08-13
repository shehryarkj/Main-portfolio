import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import pic1 from '../pics/img3.jpg'

// import './ContactMe.css'; // Import the CSS file

function ContactMe() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to manage form submission status
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null); // Notification state

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await emailjs.send(
                'service_1wv3ytg',       // Replace with your EmailJS service ID
                'template_94igc5q',      // Replace with your EmailJS template ID
                formData,
                'Zu8GVWf9NofFfQX3R'     // Replace with your EmailJS user ID
            );

            if (result.text === 'OK') {
                setFormStatus('Message sent successfully!');
                setNotification('Message sent successfully!'); // Set notification

                setFormData({ name: '', email: '', message: '' });
                setNotification('Message sent successfully!'); // Set notification
                setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
            } else {
                setFormStatus('Failed to send message. Please try again.');
                setNotification('Failed to send message.'); // Set notification
                setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again.');
            setNotification('An error occurred.'); // Set notification
            setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section id="contact" className="contact-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} className="text-center">
                            <h2 className="display-4 mb-4">Contact Me</h2>
                            <p id='cp' className="lead mb-4">Feel free to reach out to me through any of the following methods:</p>
                            <Row id='cc' className="justify-content-center">
                                <Col md={6}>
                                    <Card className="contact-card mb-4 shadow-lg">
                                        <Card.Body>
                                            <Card.Title className="contact-card-title">
                                                <FontAwesomeIcon id="ic" icon={faPhoneAlt} /> Phone
                                            </Card.Title>
                                            <Card.Text>
                                                <a href="tel:+923118105762" className="contact-link">
                                                    <span>+923118105762</span>
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="contact-card mb-4 shadow-lg">
                                        <Card.Body>
                                            <Card.Title className="contact-card-title">
                                                <FontAwesomeIcon id="ic" icon={faGoogle} />
                                                Email
                                            </Card.Title>
                                            <Card.Text>
                                                <a href="mailto:shehryarkj916@gmail.com" className="contact-link">
                                                    <span>shehryarkj916@gmail.com</span>
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="contact-card mb-4 shadow-lg">
                                        <Card.Body>
                                            <Card.Title className="contact-card-title">
                                                <FontAwesomeIcon id="ic" style={{ color: 'green', fontSize: '30px' }} icon={faWhatsapp} /> WhatsApp
                                            </Card.Title>
                                            <Card.Text>
                                                <a href="https://wa.me/923118105762" className="contact-link" target="_blank" rel="noopener noreferrer">
                                                    <span>+923118105762</span>
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <h4><Form.Label>Name</Form.Label></h4>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        id='inp'
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <h4><Form.Label>Email address</Form.Label></h4>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        id='inp'
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formMessage">
                                    <h4><Form.Label>Message</Form.Label></h4>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        id='inp'
                                        style={{ height: '200px' }}
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br /><br /><br />
                <img
                id='img3'
                    style={{
                        width: '70px',
                        
                        borderRadius: '50%',
                        
                    }}
                    src={pic1} alt="" />
                <p className="copyright">
                    All Rights Reserved By @Shehryar Khan
                </p>
            </section>

            {/* Notification */}
            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}
        </>
    );
}

export default ContactMe;
