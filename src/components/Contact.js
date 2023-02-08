import React from 'react';
import '../styles/contact.css';
import { useInView } from 'react-intersection-observer';

function Contact(props) {
  const { contact } = props;
  const { ref: form, inView: formIsVisible } = useInView();
  const { ref: header, inView: headerisVisible } = useInView();

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
        >
          <form action='#' class='contact-form' ref={form}>
            <h4>
              If you have questions or if you would like to say hello, contact
              me!
            </h4>
            <div>
              <label for='name'>Name</label>
              <input
                required
                type='text'
                class='contact-form-input'
                placeholder='Your name'
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
                placeholder='example@gmail.com'
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
    </div>
  );
}

export default Contact;
