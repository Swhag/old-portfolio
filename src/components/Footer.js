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
        <a href='https://github.com/Swhag' target='_blank'>
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
    <p className='copyright'>
      "Built by hand, one pixel at a time" &copy; 2023, Caleb Kim
    </p>
  );
}

export default Footer;
