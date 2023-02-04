import React from 'react';
import '../styles/miniProjects.css';

function Contact(props) {
  const { contact } = props;

  return (
    <div className='mini-project-section' ref={contact}>
      <div className='mini-project-header'>
        <h2>
          <span>Contact</span>
        </h2>
      </div>
    </div>
  );
}

export default Contact;
