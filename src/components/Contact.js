import React from 'react';
import '../styles/contact.css';

function Contact(props) {
  const { contact } = props;

  return (
    <div className='contact-section' ref={contact}>
      <div className='contact-container'>
        <div className='contact-header'>
          <h1>CONTACT</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
