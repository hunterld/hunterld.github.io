import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';


// Import components
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg" fixed="top" className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={{ color: '#0004ff' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#0004ff' }}>About</Nav.Link>
            <Nav.Link href="#skills" style={{ color: '#0004ff' }}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{ color: '#0004ff' }}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#0004ff' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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

