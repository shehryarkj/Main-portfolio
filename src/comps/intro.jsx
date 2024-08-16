import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../pics/wallapapper3.jpg"; // Include the file extension
import { TypeAnimation } from "react-type-animation";
import pic1 from '../pics/14KZOP05.png'
import resume from '../pics/cv.pdf'
import "../comps/intro.css"

function Intro() {
  // Determine if dark mode is enabled by checking a global theme context or similar method
  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <div
      id='intro'
      className={`d11 ${isDarkMode ? 'dark-mode' : ''}`}
      style={{ position: 'relative', overflow: 'hidden', height: '100vh', display: 'grid', border: '0', gridTemplateColumns: '60% 40%' }}
    >
      {/* Blurred Background */}
      <div
      id="bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(6px)',

        }}
      ></div>
      <Container className="c1">
        <Row id="col2" className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col lg={12} sm={12} id="col1" className="py-5" style={{ borderRadius: '10px' }}>
            <h1 className="display-4">It's Me, Shehryar Khan</h1>
            <div id="anim">
              <TypeAnimation
                sequence={[
                  'I Am A Web Designer',
                  1000,
                  'I Am A Web Developer',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '3em' }}
                repeat={Infinity}
              />
            </div>
            <p className="lead">A MERN Stack Developer and Web Designer</p>
          </Col>
          <a
            href={resume} // Link to your CV file
            download="Shehryar_Khan_CV.pdf" // Suggested file name
            style={{ textDecoration: 'none', zIndex: '10000' }}
            id="btn1"
          >
            <Button variant="primary" style={{ padding: '10px 20px' }}>
              Download CV
            </Button>
          </a>
        </Row>
      </Container>
      
      <div
        id="dv"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <img id="img1" src={pic1} alt="" />
      </div>
    </div>
  );
}

export default Intro;
