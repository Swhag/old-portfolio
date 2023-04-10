import React from 'react';
import '../styles/footer.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { IoDocumentTextSharp } from 'react-icons/io5';

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
          <div className='linkedin-icon'>
            <AiFillLinkedin size={36} />
          </div>
        </a>
      </div>
      <div>
        <a href='https://github.com/Swhag' target='_blank'>
          <div className='github-icon'>
            <AiFillGithub size={36} />
          </div>
        </a>
      </div>
      <div>
        <a
          href='https://drive.google.com/file/d/1XjeV5qWXkH4z4s_FDPknXW3OmV5G7vvj/view?usp=sharing'
          target='_blank'
        >
          <div className='resume-icon'>
            <IoDocumentTextSharp size={36} />
          </div>
        </a>
      </div>
      <div>
        <a href={`mailto:${email}`}>
          <div className='email-icon'>
            <AiOutlineMail size={36} />
          </div>
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
