import React from 'react';
import '../styles/footer.css';

function Footer(props) {
  const { footer } = props;

  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <MobileIcons></MobileIcons>
      </div>
    </div>
  );
}

function MobileIcons() {
  return (
    <div className='mobile-icons'>
      <div>
        <a
          href='https://www.linkedin.com/in/caleb-kim-76a440209'
          target='_blank'
        >
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-brands fa-github'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-regular fa-file-lines'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-regular fa-envelope'></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
