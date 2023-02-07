import React from 'react';
import '../styles/SmallProjects.css';
import { useInView } from 'react-intersection-observer';

function SmallProjects(props) {
  const { SmallProjects } = props;

  return (
    <div className='small-projects-section'>
      <div className='small-projects-container'>
        <div className='small-project'>
          <img src='../images/Todo.png'></img>
        </div>
      </div>
    </div>
  );
}

export default SmallProjects;
