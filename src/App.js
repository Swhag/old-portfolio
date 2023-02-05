import React, { useRef } from 'react';

import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideLinks from './components/SideLinks';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const hero = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App'>
      <Navbar
        scrollToSection={scrollToSection}
        hero={hero}
        about={about}
        projects={projects}
        contact={contact}
      ></Navbar>
      <Hero
        scrollToSection={scrollToSection}
        hero={hero}
        about={about}
        projects={projects}
        contact={contact}
      ></Hero>
      <SideLinks></SideLinks>

      <About
        scrollToSection={scrollToSection}
        about={about}
        contact={contact}
      ></About>
      <Projects projects={projects}></Projects>
      {/* <Contact contact={contact}></Contact> */}
    </div>
  );
}

export default App;
