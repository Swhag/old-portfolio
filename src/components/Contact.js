import React, { useRef } from 'react';
import '../styles/contact.css';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

function Contact(props) {
  const { contact } = props;
  const { ref: contactForm, inView: formIsVisible } = useInView();
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m2rjxwm',
        'template_uq7lasq',
        e.target,
        '9mD_2hLIAeFjt_OmF'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className='contact-section' ref={contact}>
      <div className='contact-header'>
        <h1>CONTACT</h1>
      </div>
      <div className='contact-container'>
        <div className='image-container'></div>
        <div
          className={`contact-form-container ${
            formIsVisible ? 'contact-form-animate' : ''
          }`}
          ref={contactForm}
        >
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <h4>If you have questions contact me! caleb.kim1@outlook.com</h4>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                required
                type='text'
                className='contact-form-input'
                placeholder='Your name'
                name='name'
                id='name'
              />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input
                required
                type='text'
                className='contact__form-input'
                placeholder='example@gmail.com'
                name='user_email'
                id='email'
              />
            </div>

            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                required
                rows='7'
                className='contact__form-input'
                name='message'
                id='message'
              ></textarea>
            </div>

            <button className='btn' type='submit'>
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
