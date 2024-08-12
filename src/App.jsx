import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './comps/nav';
import Intro from './comps/intro';
import About from './comps/about';
import Projects from './comps/projects';
import ContactMe from './comps/Contact'; // Ensure correct import
import Services from './comps/services';
import Skills from './comps/skills';
import "./App.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
function App() {
  return (
   
      <div style={{overflow:'hidden'}}>
        <Navbare  />
        <Intro />
       <br /><br /><br /><br />
        <About />
        <div className='App'>
      <h1>My Portfolio</h1>
<h2> OUR SERVICES</h2>
        <Services/>
        </div>
        <div className="App">
      <Skills />
    </div>
        <br /><br /><br /><br />
        <div className="App">
    <h1>MY PROJECTS</h1>
    <br /><br /><br /><br />
          <Projects />

        </div>
        <br /><br /><br /><br />
          <ContactMe />
      </div>
  
  );
}

export default App;
