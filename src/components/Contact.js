import React from 'react';
import '../styles/contact.css';
import { useInView } from 'react-intersection-observer';

function Contact(props) {
  const { contact } = props;
  const { ref: form, inView: myElementIsVisible } = useInView();

  return (
    <div className='contact-section' ref={contact}>
      <div className='contact-header'>
        <h1>CONTACT</h1>
      </div>
      <div className='contact-form-container'>
        <form action='#' class='contact-form' ref={form}>
          <div>
            <label for='name'>Name</label>
            <input
              required
              type='text'
              class='contact-form-input'
              name='name'
              id='name'
            />
          </div>

          <div>
            <label for='email'>Email</label>
            <input
              required
              type='text'
              class='contact__form-input'
              name='email'
              id='email'
            />
          </div>

          <div>
            <label for='message'>Message</label>
            <textarea
              required
              rows='7'
              class='contact__form-input'
              name='message'
              id='message'
            ></textarea>
          </div>

          <button className='btn' type='submit'>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
