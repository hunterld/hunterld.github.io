import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bounce-on-scroll');
          } else {
            entry.target.classList.remove('bounce-on-scroll');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    const icons = ref.current.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
      observer.observe(icon);
    });

    return () => icons.forEach((icon) => observer.unobserve(icon));
  }, []);

  // Define an array of technology icons and their file names
  const techIcons = [
    'javascript.png',
    'react.jpg',
    'jQuery.png',
    'html5.png',
    'css3.png',
    'python.png',
    'flask.png',
    'Nodejs.png',
    'expressjs.png',
    'sql.png',
    'postgresql.png',
    'sqlalchemy.png',
    'mysql.jpg',
    'oracle.png',
    'git.png',
    'github.jpg',
    'terminal.png',
    'RESTfulAPIs.png',
    'jest.png',
    'unit_testing.jpg'
    // Add more icons as necessary
  ];

  return (
    <div className="skills-container">
      <h2 className="mt-4">Skills</h2>
      {/* <p>With a background in system analysis, I am transitioning into a software developer role to pursue my passiong for engineering.  I am dedicated to creating innovative solutions and constantly expanding my skills.</p> */}
      <h3 className="mt-4">Technologies and Tools</h3>
      <div className="technologies" ref={ref}>
        {techIcons.map((icon, index) => (
          <div className="tech-icon" key={index}>
            <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} alt={icon.split('.')[0]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;