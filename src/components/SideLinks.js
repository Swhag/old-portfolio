import React from 'react';

import '../styles/sideLinks.css';

function SideLinks(props) {
  return (
    <div className='side-links-container'>
      <ul>
        <li className='side-links'>
          <a href='https://www.linkedin.com/in/caleb-kim-76a440209'>LinkedIn</a>

          <i className='fa-brands fa-linkedin'></i>
        </li>

        <li className='side-links'>
          <p>GitHub</p>
          <i className='fa-brands fa-github'></i>
        </li>

        <li className='side-links'>
          <p>Resume</p>
          <i className='fa-regular fa-file-lines'></i>
        </li>
      </ul>
    </div>
  );
}

export default SideLinks;
