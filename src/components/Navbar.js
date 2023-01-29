import React from 'react';
import '../styles/navbar.css';

function Navbar(props) {
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Mini-Projects</li>
      </ul>
    </div>
  );
}

export default Navbar;