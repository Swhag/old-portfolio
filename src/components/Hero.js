import React from 'react';
import '../styles/hero.css';

function Hero(props) {
  const { scrollToSection, hero, about, projects } = props;

  return (
    <div className='hero' ref={hero}>
      <div className='hero-inner'>
        <h1>
          Hi, I'm <span>Caleb</span>
        </h1>
        <p>Welcome to my portfolio page</p>
      </div>
      <div className='button-wrapper'>
        <div>
          <button onClick={() => scrollToSection(about)}>ABOUT</button>
        </div>
        <div>
          <button onClick={() => scrollToSection(projects)}>PROJECTS</button>
        </div>
        <div>
          <button>MINI-PROJECTS</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
