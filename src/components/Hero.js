import { useEffect, useState } from 'react';
import '../styles/hero.css';

function Hero(props) {
  const { scrollToSection, hero, about, projects, contact } = props;
  const [fadeIn, setFadeIn] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFadeIn('end');
    }, 2100);

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className='hero' ref={hero}>
      <div className='hero-inner'>
        <h1 className={`line-one ${fadeIn}`}>Hi, MY NAME IS CALEB</h1>
        <div>
          <p className={`line-two ${fadeIn}`}>Frontend Developer</p>
        </div>
      </div>
      <div className={`button-wrapper start ${fadeIn}`}>
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
      <div className={`mouse-scroll-container start ${fadeIn}`}>
        <div className='mouse'></div>
      </div>
    </div>
  );
}

export default Hero;
