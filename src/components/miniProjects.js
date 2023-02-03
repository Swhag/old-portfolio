import React from 'react';
import '../styles/miniProjects.css';

function MiniProjects(props) {
  const { miniProjects } = props;

  return (
    <div className='mini-project-section' ref={miniProjects}>
      <div className='mini-project-header'>
        <h2>
          <span>Mini-Projects</span>
        </h2>
      </div>
    </div>
  );
}

export default MiniProjects;
