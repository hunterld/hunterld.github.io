import React from 'react';
import './Contact.css';
// import Footer from './Footer';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Get in touch with me</p>
      </div>
        <div className="contact-content">
          <form className="contact-form" action="https://formspree.io/f/mkndoknr" method="POST">
            <input type="text" placeholder="Your name" name="name" required />
            <input type="email" placeholder="Your email" name="email" required />
            <textarea placeholder="Enter your message" name="message" required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <div className="contact-info">
            <p>Email: lhunter3753@gmail.com</p>
            <p>Address: Los Angeles Metro Area</p>
            <div className="social-links">
              <a href="https://github.com/hunterld" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/icons/github--v1.png`} alt="GitHub" />
              </a>
              <a href="https://linkedin.com/in/hunterld" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/icons/linkedin--v2.png`} alt="LinkedIn" />
              </a>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;

