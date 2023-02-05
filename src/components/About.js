import '../styles/about.css';

function About(props) {
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
  ];

  return (
    <div className='about-section' ref={about}>
      <div className='about-container'>
        <div className='about-header'>
          <h1>ABOUT ME</h1>
        </div>
        <div className='about-content'>
          <div className='content-left'>
            <h3>Get to know me!</h3>
            <p>
              Hello! my name is Caleb. I'm a Frontend Web Developer with IT and
              Cybersecurity background. I'am seeking an entry-level position to
              begin my career in web development within a high-level
              professional environment. Aiming to participate all throughout the
              development process and expand my current skills at the same time.
            </p>
            <button className='btn' onClick={() => scrollToSection(contact)}>
              CONTACT
            </button>
          </div>
          <div className='content-right'>
            <h3>My Skills</h3>
            <div className='skills'>
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
