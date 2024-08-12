import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../pics/wallapapper3.jpg"; // Include the file extension
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div id='intro' className='d11' style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Blurred Background */}
      <div
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
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col
            lg={12}
            sm={12}
            id="col1"
            className="py-5 text-center"
            style={{ backgroundColor: 'rgba(248, 249, 250, 0.4)', borderRadius: '10px' }}
          >
            
            <h1  className="display-4">It's Me, Shehryar Khan</h1>
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
            <p className="lead">A Mern Stack Devoloper and Web Designer</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
