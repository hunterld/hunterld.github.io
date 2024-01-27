import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link smooth to="#home" className="nav-link">Home</Link> {/* Use HashLink here */}
          </li>
          <li className="nav-item">
            <Link smooth to="#about" className="nav-link">About</Link> {/* Use HashLink here */}
          </li>
          <li className="nav-item">
            <Link smooth to="#skills" className="nav-link">Skills</Link> {/* Use HashLink here */}
          </li>
          <li className="nav-item">
            <Link smooth to="#projects" className="nav-link">Projects</Link> {/* Use HashLink here */}
          </li>
          <li className="nav-item">
            <Link smooth to="#contact" className="nav-link">Contact</Link> {/* Use HashLink here */}
          </li>
        </ul>
      </nav>

      {/* Assign IDs to your sections */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </Router>
  );
}

export default App;

