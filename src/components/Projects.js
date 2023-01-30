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
    </div>
  );
}

export default Projects;
