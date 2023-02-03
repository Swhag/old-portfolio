import React, { useState, useEffect } from 'react';
import '../styles/projects.css';

function Projects(props) {
  const { projects } = props;
  const [mobile, setMobile] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (width <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return (
    <div className='projects-section' ref={projects}>
      <div className='projects-header'>
        <h2>
          <span>Projects</span>
        </h2>
      </div>

      <div className='projects-container'>
        <Project1 mobile={mobile}></Project1>
        <Project2 mobile={mobile}></Project2>
        <Project3 mobile={mobile}></Project3>
      </div>
    </div>
  );
}

function Project1(props) {
  const { mobile } = props;
  const video1 = (
    <div className='video-overlay'>
      <video
        className='video-right'
        controls
        autoPlay
        muted
        loop
        preload='metadata'
      >
        <source src='../Videos/e-commerce.mp4' type='video/mp4' />
      </video>
    </div>
  );

  return (
    <div className='project-right'>
      <div className='project-info'>
        <div className='project-description'>
          <h3>E-Commerce Web App</h3>
          <p>
            Simple E-Commerce Web Application built with ReactJS, Redux, Axios,
            React Router and Bootstrap to strap everything together.
          </p>

          {mobile === true ? video1 : null}

          <ul>
            <h4>Features</h4>
            <li>Clean user interface with smooth animations</li>
            <li>Add and remove products from the shopping cart</li>
            <li>Filter products by categories</li>
            <li>Responsive design</li>
          </ul>

          <div className='button-group'>
            <div className='btn'>
              <a
                href='https://swhag.github.io/React-E-Commerce-App/'
                target='_blank'
              >
                <span>Live App</span>
              </a>
            </div>
            <div className='btn'>
              <a
                href='https://github.com/Swhag/React-E-Commerce-App'
                target='_blank'
              >
                <span>Code</span>
                <i className='fa-solid fa-code'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {mobile === false ? video1 : null}
    </div>
  );
}

function Project2(props) {
  const { mobile } = props;
  const video2 = (
    <div className='video-overlay'>
      <video
        className='video-left'
        controls
        autoPlay
        muted
        loop
        preload='metadata'
      >
        <source src='../Videos/CVBuilder.mp4' type='video/mp4' />
      </video>
    </div>
  );

  return (
    <div className='project-left'>
      {mobile === false ? video2 : null}

      <div className='project-info'>
        <div className='project-description'>
          <h3>Resumer Builder Web App</h3>
          <p>
            Resume-Builder Web Application with minimalist design. Built using
            ReactJS, React-to-print, UUID library and CSS.
          </p>

          {mobile === true ? video2 : null}

          <ul>
            <h4>Features</h4>
            <li>
              Real-time rendering of Resume Input and Output using State
              management
            </li>
            <li>Generate PDF (targets CV preview component only)</li>
            <li>Clean user interface with smooth animations (vanilla CSS)</li>
            <li>Responsive design (mobile friendly UI)</li>
          </ul>

          <div className='button-group'>
            <div className='btn'>
              <a
                href='https://swhag.github.io/Resume-Builder-App/'
                target='_blank'
              >
                <span>Live App</span>
              </a>
            </div>
            <div className='btn'>
              <a
                href='https://github.com/Swhag/Resume-Builder-App'
                target='_blank'
              >
                <span>Code</span>
                <i className='fa-solid fa-code'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project3(props) {
  const { mobile } = props;
  const video3 = (
    <div className='video-overlay'>
      <video
        className='video-right'
        controls
        autoPlay
        muted
        loop
        preload='metadata'
      >
        <source src='../Videos/WeatherApp.mp4' type='video/mp4' />
      </video>
    </div>
  );

  return (
    <div className='project-right'>
      <div className='project-info'>
        <div className='project-description'>
          <h3>Simple Weather App</h3>
          <p>
            Simple weather Web App build using HTML/CSS/JavaScript. Utilized
            JavaScript Async/Await function, API fetch calls and DOM
            manipulation.
          </p>

          {mobile === true ? video3 : null}

          <ul>
            <h4>Features</h4>
            <li>
              Search location to load forecast data (OpenWeatherMap API calls)
            </li>
            <li>Display daily forecast data for a given location</li>
            <li>Display data in metric / imperial units</li>
            <li>
              RRender appropriate weather icons for each forecast description
            </li>
          </ul>

          <div className='button-group'>
            <div className='btn'>
              <a href='https://swhag.github.io/Weather-App/' target='_blank'>
                <span>Live App</span>
              </a>
            </div>
            <div className='btn'>
              <a href='https://github.com/Swhag/Weather-App' target='_blank'>
                <span>Code</span>
                <i className='fa-solid fa-code'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {mobile === false ? video3 : null}
    </div>
  );
}

export default Projects;
