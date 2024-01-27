import React from 'react';
import './About.css';

const About = () => {
  const images = [
    { src: '/images/personal/code.jpg', label: 'Coding' },
    { src: '/images/personal/coffee.jpg', label: 'Drinking Coffee' },
    { src: '/images/personal/island.jpg', label: 'Favorite Place' },
    { src: '/images/personal/dualmonitors.jpg', label: 'Coding' },
    { src: '/images/personal/react.jpg', label: 'React' },
    { src: '/images/personal/learning.jpg', label: 'Learning' },
    // ... more images if necessary
  ];

  return (
    <div className="about-section">
      <div className="about-text">
        <h2>About Me</h2>
        <p>With a background in system analysis, I am transitioning into a software developer role to pursue my passiong for engineering.  I am dedicated to creating innovative solutions and constantly expanding my skills.</p>
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
