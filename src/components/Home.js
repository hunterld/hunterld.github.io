import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const jobTitles = ["Full Stack Developer", "Front End Developer", "Back End Developer"];

const Home = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
  
    // Function to update the job title
    const handleTyping = () => {
      setJobTitle(current => isDeleting ? current.slice(0, -1) : jobTitles[loopNum].slice(0, current.length + 1));
      setTypingSpeed(prev => isDeleting ? 100 : 150); // Typing speed
    };
  
    // Call the handleTyping function after a delay
    timer = setTimeout(handleTyping, typingSpeed);
  
    if (!isDeleting && jobTitle === jobTitles[loopNum]) {
      // Pause before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000); // 3-second pause
    } else if (isDeleting && jobTitle === '') {
      // Switch to the next title after deleting
      setIsDeleting(false);
      setLoopNum(loopNum => (loopNum + 1) % jobTitles.length);
    }
  
    return () => clearTimeout(timer);
  }, [jobTitle, isDeleting, loopNum, typingSpeed]);
  

  return (
    <div className="home-container">
      <h1 className="home-title">Hi, I am La Shon</h1>
      <div className="typewriter">
        <h2 className="job-title">{jobTitle}<span className="cursor">&nbsp;</span></h2>
      </div>
      <p className="lead">I'm a passionate Full Stack Developer with a love for crafting beautiful and functional web experiences.</p>
      
      <div className="socials-and-button-container">
        <div className="social-icons">
            <img src={`${process.env.PUBLIC_URL}/icons/github--v1.png`} alt="GitHub" />
            <img src={`${process.env.PUBLIC_URL}/icons/linkedin--v2.png`} alt="LinkedIn" />
        </div>
        <div className="buttons-container">
        <a href="#projects" className="btn projects-button">Projects</a>
        <a href="#contact" className="btn contact-button">Contact Me</a>
        </div>
      </div>

      <div className="down-arrow-container">
        <div className="down-arrow"></div>
      </div>
    </div>
  );
};

export default Home;
