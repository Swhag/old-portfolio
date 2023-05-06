import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaProjectDiagram } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';

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
          <div className='navbar-icon'>
            <AiOutlineHome size={20} />
          </div>
          <span className='nav-item'>Home</span>
        </li>
        <li
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection(about)}
        >
          <div className='navbar-icon'>
            <CgProfile size={20} />
          </div>

          <span className='nav-item'>About</span>
        </li>
        <li
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection(projects)}
        >
          <div className='navbar-icon'>
            <FaProjectDiagram size={16} />
          </div>

          <span className='nav-item'>Projects</span>
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection(contact)}
        >
          <div className='navbar-icon'>
            <RiContactsLine size={18} />
          </div>

          <span className='nav-item'>Contact</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
