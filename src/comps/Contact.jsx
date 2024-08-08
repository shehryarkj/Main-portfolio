import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section" style={{ padding: '50px 0', border: 'none' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="display-4 mb-4">Contact Me</h2>
            <p className="lead mb-4">Feel free to reach out to me through any of the following methods:</p>
            <Row id='cc' className="justify-content-center">
              <Col md={6}>
                <Card className="contact-card mb-4 shadow-lg">
                  <Card.Body>
                    <Card.Title className="contact-card-title">
                      <FontAwesomeIcon icon={faPhoneAlt} /> Phone
                    </Card.Title>
                    <Card.Text>
                      <a href="tel:+923118105762" className="contact-link">
                        <span>+923118105762</span></a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="contact-card mb-4 shadow-lg">
                  <Card.Body>
                    <Card.Title className="contact-card-title">
                      <FontAwesomeIcon icon={faGoogle} />
                       Email
                    </Card.Title>
                    <Card.Text>
                      <a href="mailto:shehryarkj916@gmail.com" className="contact-link">
                        <span>shehryarkj916@gmail.com</span></a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="contact-card mb-4 shadow-lg">
                  <Card.Body>
                    <Card.Title className="contact-card-title">
                      <FontAwesomeIcon style={{color:'green',fontSize:'30px'}} icon={faWhatsapp} /> WhatsApp
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
      <p className="copyright">
        All Rights Reserved By @Shehryar Khan
      </p>
    </section>
  );
}

export default ContactMe;
