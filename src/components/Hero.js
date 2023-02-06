import { useEffect, useState } from 'react';
import '../styles/hero.css';

function Hero(props) {
  const { scrollToSection, hero, about, projects, contact } = props;
  const [fadeIn, setFadeIn] = useState('start');

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className='hero' ref={hero}>
      <div className='hero-inner'>
        <h1 className={`name ${fadeIn}`}>Hi, MY NAME IS CALEB</h1>
        <p className={`welcome ${fadeIn}`}>Welcome to my portfolio page</p>
      </div>
      <div className={`button-wrapper ${fadeIn}`}>
        <div>
          <button onClick={() => scrollToSection(about)}>ABOUT</button>
        </div>
        <div>
          <button onClick={() => scrollToSection(projects)}>PROJECTS</button>
        </div>
        <div>
          <button onClick={() => scrollToSection(contact)}>CONTACT</button>
        </div>
      </div>
      <MobileIcons></MobileIcons>
      <div className={`mouse-scroll-container ${fadeIn}`}>
        <div className='mouse'></div>
      </div>
    </div>
  );
}

function MobileIcons() {
  return (
    <div className='mobile-icons'>
      <div>
        <a
          href='https://www.linkedin.com/in/caleb-kim-76a440209'
          target='_blank'
        >
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-brands fa-github'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-regular fa-file-lines'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-regular fa-envelope'></i>
        </a>
      </div>
    </div>
  );
}

export default Hero;
