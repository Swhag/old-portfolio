import React from 'react';
import '../styles/projects.css';

function Projects(props) {
  const { projects } = props;

  return (
    <div className='projects-section' ref={projects}>
      <div className='projects-header'>
        <h1>PROJECTS</h1>
      </div>
      <div className='projects-container'>
        <Project1></Project1>
        <Project2></Project2>
        <Project3></Project3>
      </div>
    </div>
  );
}

function Project1(props) {
  return (
    <div className='project'>
      <video
        className='project-video'
        controls
        autoPlay
        muted
        loop
        preload='metadata'
      >
        <source src='../Videos/e-commerce.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>E-Commerce Website</h3>
        <p>
          Simple E-Commerce Web Application built with ReactJS, Redux, Axios,
          React Router and Bootstrap.
        </p>
        <div className='button-group'>
          <a
            className='btn'
            href='https://swhag.github.io/React-E-Commerce-App/'
            target='_blank'
          >
            <span>Live App</span>
          </a>
          <a
            className='btn'
            href='https://github.com/Swhag/React-E-Commerce-App'
            target='_blank'
          >
            <span>Code</span>
            <i className='fa-solid fa-code'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Project2(props) {
  return (
    <div className='project'>
      <video
        className='project-video'
        controls
        autoPlay
        muted
        loop
        preload='metadata'
      >
        <source src='../Videos/CVBuilder.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>Resumer Builder App</h3>
        <p>
          Resume-Builder Web Application with minimalist design. Built using
          ReactJS, React-to-print, UUID library and CSS.
        </p>
        <div className='button-group'>
          <a
            className='btn'
            href='https://swhag.github.io/Resume-Builder-App/'
            target='_blank'
          >
            <span>Live App</span>
          </a>
          <a
            className='btn'
            href='https://github.com/Swhag/Resume-Builder-App'
            target='_blank'
          >
            <span>Code</span>
            <i className='fa-solid fa-code'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Project3(props) {
  return (
    <div className='project'>
      <video
        className='project-video'
        controls
        autoPlay
        muted
        loop
        preload='metadata'
      >
        <source src='../Videos/WeatherApp.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>Simple Weather App</h3>
        <p>
          Simple weather Web App build using HTML/CSS/JavaScript. Utilized
          JavaScript Async/Await function, API fetch calls and DOM manipulation.
        </p>
        <div className='button-group'>
          <a
            className='btn'
            href='https://swhag.github.io/Weather-App/'
            target='_blank'
          >
            <span>Live App</span>
          </a>
          <a
            className='btn'
            href='https://github.com/Swhag/Weather-App'
            target='_blank'
          >
            <span>Code</span>
            <i className='fa-solid fa-code'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
