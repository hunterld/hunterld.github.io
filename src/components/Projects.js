import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "Recipe Explorer",
    description: "This is a description for Project One.",
    images: [
       `${process.env.PUBLIC_URL}/images/home.png`,
       `${process.env.PUBLIC_URL}/images/form.png`,
       `${process.env.PUBLIC_URL}/images/my-recipes.png`,
       `${process.env.PUBLIC_URL}/images/ratings.png`,
       `${process.env.PUBLIC_URL}/images/shopping-list.png`
    // Add the rest of your project details here
    ],
    liveUrl: "https://recipe-explorer.onrender.com"
  },
  {
    title: "Memory Game",
    description: "This is a description for Project Two.",
    images: [
       `${process.env.PUBLIC_URL}/images/gifHome.png`,
       `${process.env.PUBLIC_URL}/images/gifStart.png`,
       `${process.env.PUBLIC_URL}/images/gifPlay.png`,
       `${process.env.PUBLIC_URL}/images/gifEnd.png`,
       `${process.env.PUBLIC_URL}/images/gifHighScore.png`
      // Add the rest of your project details here
    ],
    liveUrl: "https://dynamic-memory-game.onrender.com"
  },
  // {
  //   title: "Warbler",
  //   description: "This is a description for Project Three.",
  //   images: [
  //      `${process.env.PUBLIC_URL}/images/gifHome.png`,
  //      `${process.env.PUBLIC_URL}/images/gifStart.png`,
  //      `${process.env.PUBLIC_URL}/images/gifPlay.png`,
  //      `${process.env.PUBLIC_URL}/images/gifEnd.png`,
  //      `${process.env.PUBLIC_URL}/images/gifHighScore.png`
  //     // Add the rest of your project details here
  //   ],
  //   liveUrl: "https://warblercloudx2023.onrender.com/"
  // },
  // ... other projects
];

const Project = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000); // Rotate images every 3 seconds

    return () => clearInterval(timer); // Clear the interval when the component is unmounted
  }, [project.images.length]);

  return (
    <div className="project">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-image-container">
        <img src={project.images[currentImageIndex]} alt={`${project.title} image`} className="project-image" />
      </a>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
