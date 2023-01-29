import React from 'react';
import '../styles/sideLinks.css';

function SideLinks(props) {
  return (
    <div className='side-links-container'>
      <ul>
        <li className='side-links linkedin'>
          <a
            href='https://www.linkedin.com/in/caleb-kim-76a440209'
            target='_blank'
          >
            <span>LinkedIn</span>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>

        <li className='side-links github'>
          <a href='https://github.com/Swhag' target='_blank'>
            <span>GitHub</span>
            <i className='fa-brands fa-github'></i>
          </a>
        </li>

        <li className='side-links resume'>
          <a href='https://github.com/Swhag' target='_blank'>
            <span>Resume</span>
            <i className='fa-regular fa-file-lines'></i>
          </a>
        </li>

        <li className='side-links email'>
          <a href='https://github.com/Swhag' target='_blank'>
            <span>Email</span>
            <i className='fa-regular fa-envelope'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideLinks;
