import '../styles/about.css';
import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

function About(props) {
  const { ref: left, inView: leftVisible } = useInView();
  const { ref: right, inView: rightVisible } = useInView();
  const { ref: code, inView: codeVisible } = useInView();

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

  return (
    <div className='about-section' ref={about}>
      <div className='about-header'>
        <h1>ABOUT ME</h1>
      </div>

      <div className='about-container'>
        <div className='about-content'>
          <div
            className={`content-left ${leftVisible ? 'content-animate' : ''}`}
          >
            <h3>Get to know me!</h3>
            <p>
              Hello there! My name is Caleb and I'm a Front-End Developer with
              IT and Cybersecurity background. Currently, I work as an IT
              Analyst II, but I am eager to transition into a role in web
              development.
            </p>

            <p ref={left}>
              I have a solid understanding of JavaScript fundamentals and am
              ready to adapt to any framework. My focus as a Front-End Developer
              is on practical and minimalist design. My aim is to create
              websites that not only look great, but also perform well and offer
              a fantastic user experience.
            </p>

            <p>
              Thanks for checking out my portfolio! I hope you find it both
              informative and fun to explore. If you have any questions or would
              like to discuss potential opportunities, please don't hesitate to
              reach out.
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

        <div
          className={`about-codes ${codeVisible ? 'code-animate' : ''}`}
          ref={code}
        >
          <CodeBlock1></CodeBlock1>
          <CodeBlock2></CodeBlock2>
        </div>
      </div>
    </div>
  );
}

function CodeBlock1() {
  return (
    <pre className='person-container'>
      {'      '}
      <code>
        {'\n'}
        {'        '}
        <span className='person-keyword'>class</span> Person {'{'}
        {'\n'}
        {'          '}
        <span className='person-keyword'>constructor</span>() {'{'}
        {'\n'}
        {'            '}
        <span className='person-property'>this.name</span> ={' '}
        <span className='person-string'>'Caleb'</span>;{'\n'}
        {'            '}
        <span className='person-property'>this.humor</span> ={' '}
        <span className='person-string'>'dry'</span>;{'\n'}
        {'            '}
        <span className='person-property'>this.codes</span> ={' '}
        <span className='person-boolean'>true</span>;{'\n'}
        {'          '}
        {'}'}
        {'\n'}
        {'    '}
        {'\n'}
        {'          '}
        <span className='person-function'>printJoke</span>() {'{'}
        {'\n'}
        {'            '}
        <span className='person-keyword'>return</span> console.log(
        <span className='person-string'>'I love inline CSS'</span>);{'\n'}
        {'          '}
        {'}'}
        {'\n'}
        {'        '}
        {'}'}
        {'\n'}
        {'      '}
      </code>
      {'\n'}
      {'    '}
    </pre>
  );
}

function CodeBlock2() {
  return (
    <pre className='code-container'>
      {'      '}
      <code className='javascript'>
        {'\n'}
        {'        '}
        <span className='keyword'>function</span> startCoding() {'{'}
        {'\n'}
        {'          '}
        <span className='keyword'>try</span> {'{'}
        {'\n'}
        {'            '}
        <span className='function-call'>writeMyCode</span>();{'\n'}
        {'          '}
        {'}'} {'\n'}
        {'          '}
        <span className='keyword'>catch</span> {'{'}
        {'\n'}
        {'            '}
        <span>console.error</span>(
        <span className='string'>'Do You Even Stack Overflow?'</span>);{'\n'}
        {'          '}
        {'}'}
        {'\n'}
        {'        '}
        {'}'}
        {'\n'}
        {'      '}
      </code>
      {'\n'}
      {'    '}
    </pre>
  );
}

export default About;
