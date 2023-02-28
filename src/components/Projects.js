import React from 'react';
import '../styles/projects.css';
import { useInView } from 'react-intersection-observer';

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
        <Project4></Project4>
      </div>
    </div>
  );
}

function Project1(props) {
  const { ref: project1, inView: myElementIsVisible } = useInView();

  return (
    <div
      className={`project ${myElementIsVisible ? 'project-animate' : ''}`}
      ref={project1}
    >
      <video className='project-video' controls muted loop preload='metadata'>
        <source src='../Videos/Textats.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>Textats - Text Analyzer</h3>
        <p>
          Textats is a user-friendly text analysis tool that provides character,
          word, letter statistics and generate a quick text summarization.
          Developed with React, ChartJS, MeaningCloud API, and a lot of
          JavaScript functions.
        </p>
        <div className='button-group'>
          <a
            className='btn'
            href='https://swhag.github.io/Textats/'
            target='_blank'
          >
            <span>Live App</span>
          </a>
          <a
            className='btn'
            href='https://github.com/Swhag/Textats'
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
  const { ref: project2, inView: myElementIsVisible } = useInView();

  return (
    <div
      className={`project-reverse ${
        myElementIsVisible ? 'project-animate' : ''
      }`}
      ref={project2}
    >
      <video className='project-video' controls muted loop preload='metadata'>
        <source src='../Videos/e-commerce.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>KickStore</h3>
        <p>
          E-commerce web application that retrieves products from a mockup
          database created by me. Users can add/delete/update products in the
          shopping cart. Built suing React, Redux, Axios, React Router, and
          Bootstrap.
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

function Project3(props) {
  const { ref: project3, inView: myElementIsVisible } = useInView();

  return (
    <div
      className={`project ${myElementIsVisible ? 'project-animate' : ''}`}
      ref={project3}
    >
      <video className='project-video' controls muted loop preload='metadata'>
        <source src='../Videos/CVBuilder.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>Resumer Builder</h3>
        <p>
          Resume-Builder tool that allows users to load and save different
          states of input values and export the output resume as a PDF file. I
          utilized this app to create my own resume. Built with React,
          React-to-print, UUID library, and CSS.
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

function Project4(props) {
  const { ref: project4, inView: myElementIsVisible } = useInView();

  return (
    <div
      className={`project-reverse ${
        myElementIsVisible ? 'project-animate' : ''
      }`}
      ref={project4}
    >
      <video className='project-video' controls muted loop preload='metadata'>
        <source src='../Videos/WeatherApp.mp4' type='video/mp4' />
      </video>

      <div className='project-content'>
        <h3>Simple Weather</h3>
        <p>
          Weather web application developed using HTML, CSS, and JavaScript.
          Users can toggle between imperial and metric systems and set different
          locations. utilized JavaScript Async/Await function, OpenWeatherMap
          API calls, and DOM manipulation techniques.
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
