import React from 'react';
import '../styles/projects.css';

function Projects(props) {
  const { projects } = props;

  return (
    <div className='projects-section' ref={projects}>
      <div className='projects-header'>
        <h2>
          <span>Projects</span>
        </h2>
      </div>

      <div className='projects-container'>
        <div className='project-right'>
          <div className='project-info'>
            <div className='project-description'>
              <h3>E-Commerce Web App</h3>
              <p>
                A simple E-Commerce Web Application built with ReactJS, Redux,
                Axios, React Router and Bootstrap to strap everything together.
              </p>
              <ul>
                <h4>Features</h4>
                <li>Clean user interface with smooth animations</li>
                <li>Add and remove products from the shopping cart</li>
                <li>Filter products by categories</li>
                <li>Responsive design</li>
              </ul>
            </div>

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
                  <i className='fa-solid fa-code'></i>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          <div className='video-overlay-right'>
            <video className='video1' controls muted preload='metadata'>
              <source src='../Videos/e-commerce.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
