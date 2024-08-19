import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import pic1 from '../pics/img3.jpg';
import "../comps/contacts.css";

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await emailjs.send(
                'service_1wv3ytg',
                'template_94igc5q',
                formData,
                'Zu8GVWf9NofFfQX3R'
            );

            if (result.text === 'OK') {
                setFormStatus('Message sent successfully!');
                setNotification('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setNotification(null), 3000);
            } else {
                setFormStatus('Failed to send message. Please try again.');
                setNotification('Failed to send message.');
                setTimeout(() => setNotification(null), 3000);
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again.');
            setNotification('An error occurred.');
            setTimeout(() => setNotification(null), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section id="contact" className="contact-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col id='cnt' md={8} className="text-center">
                            <h2 className="display-4 mb-4">Contact Me</h2>
                            <p id='cp' className="lead mb-4">Feel free to reach out to me through any of the following methods:</p>
                           
                            <Row id='c' className="justify-content-center">
                              <div className="cr">

                             
                                <Col md={6}>
                                    <Card id='ccard' className="contact-card mb-4 shadow-lg">
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
                                    <Card id='ccard' className="contact-card mb-4 shadow-lg">
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
                                </div>
                            </Row>
                            <Form id='form' onSubmit={handleSubmit}>
                                <Form.Group  controlId="formName">
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
                                <Button variant="primary" type="submit" className="mt-3" disabled={isSubmitting}>
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br /><br /><br />

                <div id='footer'>

            
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
                </div>
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
