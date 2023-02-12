import React from 'react';
import '../styles/sideLinks.css';

function SideLinks(props) {
  const email = 'caleb.kim1@outlook.com';

  return (
    <div className='side-links-container'>
      <ul>
        <li className='side-links linkedin'>
          <a href='https://www.linkedin.com/in/caleb-kim1' target='_blank'>
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
          <a
            href='https://drive.google.com/file/d/1XjeV5qWXkH4z4s_FDPknXW3OmV5G7vvj/view?usp=sharing'
            target='_blank'
          >
            <span>Resume</span>
            <i className='fa-regular fa-file-lines'></i>
          </a>
        </li>

        <li className='side-links email'>
          <a href={`mailto:${email}`}>
            <span>Email</span>

            <i className='fa-regular fa-envelope'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

function EmailButton() {
  let email = 'caleb.kim1@outlook.com';

  return (
    <a href={`mailto:${email}`}>
      <i className='fa-regular fa-envelope'></i>
    </a>
  );
}

export default SideLinks;
