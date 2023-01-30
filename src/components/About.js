import React from 'react';
import '../styles/about.css';

function About(props) {
  const { about } = props;

  return (
    <div className='about-section' ref={about}>
      <div className='about-header'>
        <h2>
          <span>About</span>
        </h2>
      </div>

      <div className='about-container'>
        <div className='about-intro'>
          <i className='fa-solid fa-circle-user'></i>
          <p>
            Seeking an entry-level position to begin my career in web
            development within a high-level professional environment. Aiming to
            participate all throughout the development process and expand my
            current skills at the same time.
          </p>
        </div>

        <div className='icon-container'>
          <div className='icon-row'>
            <div className='icon-block'>
              <i className='devicon-html5-plain-wordmark colored'></i>
              <span>HTML</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-javascript-plain colored'></i>
              <span>JavaScript</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-css3-plain-wordmark colored'></i>
              <span>CSS</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-react-original colored'></i>
              <span>React</span>
            </div>
          </div>

          <div className='icon-row'>
            <div className='icon-block'>
              <i className='devicon-redux-original colored'></i>
              <span>Redux</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-git-plain colored'></i>

              <span>Git</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-webpack-plain colored'></i>
              <span>Webpack</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-nodejs-plain colored'></i>
              <span>NodeJS</span>
            </div>
          </div>

          <div className='icon-row'>
            <div className='icon-block'>
              <i className='devicon-npm-original-wordmark colored'></i>
              <span>NPM</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-sass-original colored'></i>
              <span>SASS</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-bootstrap-plain colored'></i>
              <span>Bootstrap</span>
            </div>

            <div className='icon-block'>
              <i className='devicon-jest-plain colored'></i>
              <span>Jest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
