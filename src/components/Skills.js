import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

function Skills(props) {
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
    <div className='Skills-section'>
      <div className='about-background-container'></div>

      <div className='about-header'>
        <h1>ABOUT ME</h1>
      </div>

      <div className='about-container'></div>
    </div>
  );
}

export default Skills;
