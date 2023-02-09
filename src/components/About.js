import '../styles/about.css';
import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

function About(props) {
  const { ref: left, inView: leftVisible } = useInView();
  const { ref: right, inView: rightVisible } = useInView();

  const { scrollToSection, about, contact } = props;
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Git',
    'Webpack',
    'NPM',
    'Jest',
    'SASS',
    'Bootstrap',
    'JQuery',
  ];

  const code1 = `      
    class Person {
      constructor() {
        this.name = 'Caleb';
        this.humorType = 'dry';
        this.codes = true;
      }

      printJoke() {
        return console.log('I love inline CSS!');
      }
    }`;

  const code2 = `
    function startCoding() {
      try {
        writeMyCode();
      } catch {
        console.error('time to Stack Overflow');
      }
    }`;

  return (
    <div className='about-section' ref={about}>
      <div className='about-header'>
        <h1>ABOUT ME</h1>
      </div>

      <div className='about-container'>
        {/* <div className='about-codes'>
          <pre>{code1}</pre>
          <pre>{code2}</pre>
        </div> */}

        <div className='about-content'>
          <div
            className={`content-left ${leftVisible ? 'content-animate' : ''}`}
          >
            <h3>Get to know me!</h3>
            <p ref={left}>
              Hello World! My name is Caleb. I'm a Frontend Developer with IT
              and Cybersecurity background. I am currently working as an IT
              Analyst II and seeking a frontend developer position to begin my
              career in web development.
            </p>

            <p>
              Passionate about web development, I love computers and using
              computers to solve complex problems.
            </p>

            <p>
              Eager to tackle more complex problems and I always aim for simple
              and elegant solutions to maximize efficiency.
            </p>

            <button className='btn' onClick={() => scrollToSection(contact)}>
              CONTACT
            </button>
          </div>
          <div
            className={`content-right ${rightVisible ? 'content-animate' : ''}`}
          >
            <h3>My Skills</h3>
            <div className='skills' ref={right}>
              {skills.map((skill, i) => {
                return (
                  <button key={i} className='skill-tag'>
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
