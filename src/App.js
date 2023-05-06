import React, { useRef } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import SideLinks from './components/SideLinks';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import ParticleBackground from './components/ParticleBackground';

import Lottie from './components/Lottie';
import codingAnimationData from './lottie/coding.json';
import cloudAnimationData from './lottie/cloudinfra.json';

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
      <ParticleBackground />

      <Navbar
        scrollToSection={scrollToSection}
        hero={hero}
        about={about}
        projects={projects}
        contact={contact}
      />

      <Hero
        scrollToSection={scrollToSection}
        hero={hero}
        about={about}
        projects={projects}
        contact={contact}
      />
      <SideLinks />
      <About
        scrollToSection={scrollToSection}
        about={about}
        contact={contact}
      />
      {/* <Lottie animationDataFile={cloudAnimationData} /> */}

      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
