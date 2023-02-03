import React, { useRef } from 'react';

import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideLinks from './components/SideLinks';
import About from './components/About';
import Projects from './components/Projects';
import MiniProjects from './components/MiniProjects';

function App() {
  const hero = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const miniProjects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App'>
      <Hero
        scrollToSection={scrollToSection}
        hero={hero}
        about={about}
        projects={projects}
        miniProjects={miniProjects}
      ></Hero>
      <SideLinks></SideLinks>
      <Navbar
        scrollToSection={scrollToSection}
        hero={hero}
        about={about}
        projects={projects}
        miniProjects={miniProjects}
      ></Navbar>
      <About about={about}></About>
      <Projects projects={projects}></Projects>
      <MiniProjects miniProjects={miniProjects}></MiniProjects>
    </div>
  );
}

export default App;
