import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Get in touch with me</p>
      </div>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Enter your name" name="name" required />
          <input type="email" placeholder="Enter your email" name="email" required />
          <textarea placeholder="Enter your message" name="message" required></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <div className="contact-info">
          <p>Email: lhunter3753@gmail.com</p>
          <p>Address: Los Angeles Metro Area</p>
          <div className="social-links">
            <img src={`${process.env.PUBLIC_URL}/icons/github--v1.png`} alt="GitHub" />
            <img src={`${process.env.PUBLIC_URL}/icons/linkedin--v2.png`} alt="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

