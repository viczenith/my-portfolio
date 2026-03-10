import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/contact.css';
import emailIcon from '../assets/img/icon/email.png';
import linkedinIcon from '../assets/img/icon/linkedin_icon.png';
import githubIcon from '../assets/img/icon/github.png';

function Contact() {
  useScrollReveal();

  var name, setName, email, setEmail, message, setMessage;
  [name, setName] = useState('');
  [email, setEmail] = useState('');
  [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    var subject = encodeURIComponent('Portfolio Contact from ' + name);
    var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:akorvikkyy@gmail.com?subject=' + subject + '&body=' + body;
  }

  return (
    <>
      <Navbar homeLinks={false} />

      <section id="contact">
        <p className="section_text_p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>

        <div className="contact-wrapper reveal">
          <div className="contact-info-side">
            <div className="contact-card">
              <div className="contact-card-icon">
                <img src={emailIcon} alt="Email" className="icon" />
              </div>
              <div className="contact-card-text">
                <h4>Email</h4>
                <a href="mailto:akorvikkyy@gmail.com">akorvikkyy@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </div>
              <div className="contact-card-text">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/victor-akor-godwin-676b822a5" target="_blank" rel="noopener noreferrer">Victor Akor Godwin</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </div>
              <div className="contact-card-text">
                <h4>GitHub</h4>
                <a href="https://github.com/viczenith" target="_blank" rel="noopener noreferrer">viczenith</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={function(e) { setName(e.target.value); }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={function(e) { setEmail(e.target.value); }}
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={function(e) { setMessage(e.target.value); }}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
