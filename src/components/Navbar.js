import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

function Navbar(props) {
  const { scrollToSection, hero, about, projects, contact } = props;

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset >= hero.current.offsetTop - 500 &&
        window.pageYOffset < about.current.offsetTop - 500
      ) {
        setActiveSection('hero');
      } else if (
        window.pageYOffset >= about.current.offsetTop - 500 &&
        window.pageYOffset < projects.current.offsetTop - 500
      ) {
        setActiveSection('about');
      } else if (
        window.pageYOffset >= projects.current.offsetTop - 500 &&
        window.pageYOffset < contact.current.offsetTop - 700
      ) {
        setActiveSection('projects');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hero, about, projects, contact]);

  return (
    <div className='navbar'>
      <ul>
        <li
          className={activeSection === 'hero' ? 'active' : ''}
          onClick={() => scrollToSection(hero)}
        >
          Home
        </li>
        <li
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection(about)}
        >
          About
        </li>
        <li
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection(projects)}
        >
          Projects
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection(contact)}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
