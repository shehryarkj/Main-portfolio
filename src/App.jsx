import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './comps/nav';
import Intro from './comps/intro';
import About from './comps/about';
import Projects from './comps/projects';
import ContactMe from './comps/Contact'; // Ensure correct import
import Services from './comps/services';
import Skills from './comps/skills';
import "./App.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from local storage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{ overflow: 'hidden' }}>
      <Navbare />
      <button id='dbutton' style={{
       
      }} onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Intro />
    
      <About />
      <div id='app' className='App'>
        <Services />
      </div>
      <div className="App">
        <Skills />
      </div>

      <div className="App">
        <Projects />
      </div>
  
      <ContactMe />
    </div>
  );
}

export default App;
