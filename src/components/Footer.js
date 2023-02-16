import React from 'react';
import '../styles/footer.css';

function Footer(props) {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <MobileIcons></MobileIcons>
        <CopyRight></CopyRight>
      </div>
    </div>
  );
}

function MobileIcons() {
  const email = 'caleb.kim1@outlook.com';

  return (
    <div className='mobile-icons'>
      <div>
        <a href='https://www.linkedin.com/in/caleb-kim1' target='_blank'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <i className='fa-brands fa-github'></i>
        </a>
      </div>
      <div>
        <a
          href='https://drive.google.com/file/d/1XjeV5qWXkH4z4s_FDPknXW3OmV5G7vvj/view?usp=sharing'
          target='_blank'
        >
          <i className='fa-regular fa-file-lines'></i>
        </a>
      </div>
      <div>
        <a href={`mailto:${email}`}>
          <i className='fa-regular fa-envelope'></i>
        </a>
      </div>
    </div>
  );
}

function CopyRight() {
  return (
    <p className='copyright'>&copy; 2023, Caleb Kim. All rights reserved.</p>
  );
}

export default Footer;
