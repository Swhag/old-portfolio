import React from 'react';
import '../styles/navbar.css';

function Navbar(props) {
  const { scrollToSection, hero, about, projects, contact } = props;

  return (
    <div className='navbar'>
      <ul>
        <li onClick={() => scrollToSection(hero)}>Home</li>
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
