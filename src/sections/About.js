import '../styles/about.css';
import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import Lottie from '../components/Lottie';
import codingAnimationData from '../lottie/coding.json';
import cloudAnimationData from '../lottie/cloudinfra.json';

function About(props) {
  const { ref: left, inView: leftVisible } = useInView();
  const { ref: right, inView: rightVisible } = useInView();
  const { ref: bottom, inView: bottomVisible } = useInView();

  const { scrollToSection, about, contact } = props;
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'NodeJS',
    'Redux',
    'Axios',
    'JQuery',
    'SASS',
    'Bootstrap',
    'Git',
    'Jest',
    'NPM',
    'Webpack',
  ];

  return (
    <div className='about-section' ref={about}>
      <div className='about-background-container'></div>

      <div className='about-header'>
        <h1>ABOUT ME</h1>
      </div>

      <div className='about-container'>
        <div className='about-content'>
          <div className='content-group'>
            <div
              className={`content-left ${leftVisible ? 'content-animate' : ''}`}
              ref={left}
            >
              <Lottie animationDataFile={codingAnimationData} />
            </div>
            <div
              className={`content-right ${
                rightVisible ? 'content-animate' : ''
              }`}
              ref={right}
            >
              <h3>Get to know me!</h3>
              <p>
                Hello there! My name is Caleb, and I am a Front-End Developer
                with a background in IT and Cybersecurity. Currently, I work as
                an IT Analyst II, but I am eager to transition into a role in
                web development.
              </p>

              <p>
                My main focus as a Front-End Developer is on practical and
                minimalist design. I aim to create websites that are not only
                visually appealing but also perform well and provide an
                exceptional user experience. Additionally, I have a strong grasp
                of vanilla JavaScript/CSS fundamentals and am prepared to adapt
                to any framework.
              </p>

              <p>
                Thank you for checking out my portfolio! If you have any
                questions or would like to discuss potential opportunities,
                please feel free to reach out.
              </p>

              <button className='btn' onClick={() => scrollToSection(contact)}>
                CONTACT
              </button>
            </div>
          </div>

          <div
            className={`content-bottom ${
              bottomVisible ? 'content-animate' : ''
            }`}
            ref={bottom}
          >
            <CodeBlock1></CodeBlock1>
            <CodeBlock2></CodeBlock2>
          </div>
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
