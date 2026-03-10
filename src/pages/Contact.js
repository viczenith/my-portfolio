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



  var name, setName, email, setEmail, message, setMessage, status, setStatus;

  [name, setName] = useState('');

  [email, setEmail] = useState('');

  [message, setMessage] = useState('');

  [status, setStatus] = useState('');



  function handleSubmit(e) {

    e.preventDefault();

    setStatus('sending');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '84f32690-ff75-4dfd-885e-39c15b58db7b',
        name: name,
        email: email,
        message: message,
        subject: 'Portfolio Contact from ' + name
      })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    })
    .catch(function() {
      setStatus('error');
    });

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

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>

              </div>

              <div className="contact-card-text">

                <h4>Phone</h4>

                <a href="tel:+2347064959669">+234 706 495 9669</a>

              </div>

            </div>

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

            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-status success">Message sent successfully! I'll get back to you soon.</p>
            )}

            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again.</p>
            )}

          </form>

        </div>

      </section>



      <Footer />

    </>

  );

}



export default Contact;

