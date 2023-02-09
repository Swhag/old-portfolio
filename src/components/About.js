import '../styles/about.css';
import { useInView } from 'react-intersection-observer';

function About(props) {
  const { ref: left, inView: leftVisible } = useInView();
  const { ref: right, inView: rightVisible } = useInView();

  const { scrollToSection, about, contact } = props;
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Git',
    'Webpack',
    'NPM',
    'Jest',
    'SASS',
    'Bootstrap',
    'JQuery',
  ];

  return (
    <div className='about-section' ref={about}>
      <div className='about-container'>
        <div className='about-header'>
          <h1>ABOUT ME</h1>
        </div>
        <div className='about-content'>
          <div
            className={`content-left ${leftVisible ? 'content-animate' : ''}`}
          >
            <h3>Get to know me!</h3>
            <p ref={left}>
              I'm a Frontend Web Developer with IT and Cybersecurity background.
              I am seeking an entry-level position to begin my career in web
              development within a high-level professional environment. I am
              willing to participate all throughout the development process and
              expand my technical skills at the same time.
            </p>
            <button className='btn' onClick={() => scrollToSection(contact)}>
              CONTACT
            </button>
          </div>
          <div
            className={`content-right ${rightVisible ? 'content-animate' : ''}`}
          >
            <h3>My Skills</h3>
            <div className='skills' ref={right}>
              {skills.map((skill, i) => {
                return (
                  <button key={i} className='skill-tag'>
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
