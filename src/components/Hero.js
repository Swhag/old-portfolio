import React from 'react';
import '../styles/hero.css';

function Hero(props) {
  return (
    <div className='hero'>
      <div className='hero-inner'>
        <h1>
          Hi, I'm <span>Caleb</span>
        </h1>
        <p>Welcome to my portfolio page</p>
      </div>
      <div className='button-wrapper'>
        <button>ABOUT</button>
        <button>PROJECTS</button>
        <button>MINI-PROJECTS</button>
        <button>CONTACT</button>
      </div>
    </div>
  );
}

export default Hero;
