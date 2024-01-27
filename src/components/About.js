import React from 'react';
import './About.css';

const About = () => {
  const images = [
    { src: '/images/personal/code.jpg', label: 'Coding' },
    { src: '/images/personal/coffee.jpg', label: 'Mmm...Coffee' },
    { src: '/images/personal/island.jpg', label: 'Favorite Place' },
    { src: '/images/personal/pets.png', label: 'My pets' },
    { src: '/images/personal/tennis.jpg', label: 'Tennis Fan' },
    { src: '/images/personal/learning.jpg', label: 'Learning' },
    // ... more images if necessary
  ];

  return (
    <div className="about-section">
      <div className="about-text-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Greetings! I'm not your typical software developer. With over 14 years of experience as a system administrator, I've decided to embrace my true passion and embark on an exciting journey in software development. My journey has been fueled by a love for tennis, endless cups of coffee, island getaways, the warmth of my pets, and an insatiable thirst for coding and learning.</p>
          <p>What truly sets my heart racing about software engineering is the boundless canvas for creativity and problem-solving. Whether it's designing responsive interfaces with React or crafting intricate server-side logic in Python, I'm constantly thrilled to tackle new challenges and redefine the possibilities of code.</p>
          <p>I'm eager to contribute my skills and passion to a team that values innovation, quality, and a user-focused approach to software development. Let's connect and explore how we can collaborate to craft exceptional software solutions that shine in the digital landscape.</p>
          <p></p>
        </div>
      </div>  
      <div className="about-images">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.label} className="circle-image" />
            <p className="image-label">{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
