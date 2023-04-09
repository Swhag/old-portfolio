import React from 'react';
import '../styles/sideLinks.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { IoDocumentTextSharp } from 'react-icons/io5';

function SideLinks(props) {
  const email = 'caleb.kim1@outlook.com';

  return (
    <div className='side-links-container'>
      <ul>
        <li className='side-links linkedin'>
          <a href='https://www.linkedin.com/in/caleb-kim1' target='_blank'>
            <span>LinkedIn</span>
            <div className='linkedin-icon'>
              <AiFillLinkedin size={32} />
            </div>
          </a>
        </li>

        <li className='side-links github'>
          <a href='https://github.com/Swhag' target='_blank'>
            <span>GitHub</span>
            <div className='github-icon'>
              <AiFillGithub size={32} />
            </div>
          </a>
        </li>

        <li className='side-links resume'>
          <a
            href='https://drive.google.com/file/d/1XjeV5qWXkH4z4s_FDPknXW3OmV5G7vvj/view?usp=sharing'
            target='_blank'
          >
            <span>Resume</span>
            <div className='resume-icon'>
              <IoDocumentTextSharp size={32} />
            </div>
          </a>
        </li>

        <li className='side-links email'>
          <a href={`mailto:${email}`}>
            <span>Email</span>
            <div className='email-icon'>
              <AiOutlineMail size={30} />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideLinks;
