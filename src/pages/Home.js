import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

import useScrollReveal from '../hooks/useScrollReveal';

import profilePic from '../assets/img/mee-removebg.png';

import expIcon from '../assets/img/icon/exp.png';

import educationIcon from '../assets/img/icon/education.png';

import arrowIcon from '../assets/img/icon/arrow.png';

import checkedIcon from '../assets/img/icon/checked.png';

import cvFile from '../assets/CV/VictorAkorGodwin_CV.pdf';

import babelImg from '../assets/img/the_babel_edit.jpeg';

import medicenseImg from '../assets/img/medicenseai.jpg';

import liorImg from '../assets/img/lioreliora.jpg';

import lightitImg from '../assets/img/lightit-slp.jpg';



var titles = [

  "Full Stack Software Engineer",

  "Data Science Engineer",

  "AI & Robotics Engineer"

];



function useTypedText(words, speed, pause) {

  var text = '';

  var setText;

  [text, setText] = useState('');



  useEffect(function() {

    var wordIndex = 0;

    var charIndex = 0;

    var deleting = false;

    var timer;



    function tick() {

      var current = words[wordIndex];

      if (!deleting) {

        charIndex++;

        setText(current.substring(0, charIndex));

        if (charIndex === current.length) {

          deleting = true;

          timer = setTimeout(tick, pause);

          return;

        }

      } else {

        charIndex--;

        setText(current.substring(0, charIndex));

        if (charIndex === 0) {

          deleting = false;

          wordIndex = (wordIndex + 1) % words.length;

        }

      }

      timer = setTimeout(tick, deleting ? speed / 2 : speed);

    }



    timer = setTimeout(tick, speed);

    return function() { clearTimeout(timer); };

  }, [words, speed, pause]);



  return text;

}



function Home() {

  useScrollReveal();

  var typedText = useTypedText(titles, 80, 1500);

  var location = useLocation();

  useEffect(function() {
    if (location.hash) {
      var id = location.hash.replace('#', '');
      var el = document.getElementById(id);
      if (el) {
        setTimeout(function() { el.scrollIntoView({ behavior: 'smooth' }); }, 100);
      }
    }
  }, [location]);



  return (

    <>

      <Navbar homeLinks={true} />



      <div className="main">

        {/* Hero Section */}

        <section id="profile">

          <div className="hero-shapes">

            <div className="shape shape-1"></div>

            <div className="shape shape-2"></div>

            <div className="shape shape-3"></div>

          </div>

          <div className="section_pic-container">

            <img src={profilePic} alt="Victor Akor Godwin" className="profile-pic" />

          </div>

          <div className="section_text">

            <p className="section_text_p1">Hello, I'm</p>

            <h1 className="title">Victor Akor Godwin</h1>

            <p className="hero-subtitle">{typedText}<span style={{borderRight: '2px solid var(--accent)', paddingRight: '2px', animation: 'blink 0.7s step-end infinite'}}>&#8203;</span></p>

            <div className="btn-container">

              <a href={cvFile} target="_blank" rel="noopener noreferrer">

                <button className="btn btn-color-1" type="button">Download CV</button>

              </a>

              <Link to="/contact">

                <button className="btn btn-color-2">Let's Talk</button>

              </Link>

            </div>

            <div id="socials-container">

              <a href="https://www.linkedin.com/in/victor-akor-godwin-676b822a5" target="_blank" rel="noopener noreferrer" title="LinkedIn">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

              </a>

              <a href="https://github.com/viczenith" target="_blank" rel="noopener noreferrer" title="GitHub">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>

              </a>

            </div>

          </div>

        </section>



        {/* Stats Bar */}

        <div className="stats-bar reveal">

          <div className="stat-item">

            <span className="stat-number">5+</span>

            <span className="stat-label">Years Experience</span>

          </div>

          <div className="stat-item">

            <span className="stat-number">15+</span>

            <span className="stat-label">Projects Built</span>

          </div>

          <div className="stat-item">

            <span className="stat-number">14+</span>

            <span className="stat-label">Happy Clients</span>

          </div>

        </div>



        {/* About Section */}

        <section id="about" className="reveal">

          <p className="section_text_p1">Get To Know More</p>

          <h1 className="title">About Me</h1>

          <div className="section-container">

            <div className="about-details-container">

              <div className="about-containers">

                <div className="details-container cont1">

                  <img src={expIcon} alt="Experience icon" className="icon" />

                  <h3>Top Major Project</h3>

                  <p>Cancer Detection Machine</p>

                </div>

                <div className="details-container cont2">

                  <img src={educationIcon} alt="Education icon" className="icon" />

                  <h3>Key Skills</h3>

                  <p>Full Stack Engineering<br />Data Science & AI</p>

                </div>

              </div>

              <div className="text-container">

                <p>

                  I am a <strong>Full Stack Software Engineer, Data Science Engineer, and AI & Robotics Engineer</strong> with over 5 years of hands-on experience building production-grade applications. I work across the entire stack — from designing responsive frontends with React and JavaScript/TypeScript, to building robust backends with Python (Django, Flask) and Node.js, to deploying machine learning models and AI-powered solutions. I have built and shipped real-estate platforms, payment systems, e-commerce apps, learning management systems, medical AI tools, and Telegram bots for clients across Nigeria, Ethiopia, and the USA. I am not just interested in AI and robotics — I build with them professionally.

                </p>

              </div>

            </div>



            <div className="section_pic-container section_pic">

              <img src={profilePic} alt="Victor Akor Godwin" className="about-pic" />

              <div className="arrow_up">

                <a href="#experience">

                  <img src={arrowIcon} alt="Scroll down" className="icon arrow" />

                </a>

              </div>

            </div>

          </div>

        </section>



        {/* Experience Section */}

        <section id="experience" className="reveal">

          <p className="section_text_p1">Explore My</p>

          <h1 className="title">Experience</h1>

          <div className="experience-details-container">

            <div className="experience-containers">

              <div className="ex-details-container">

                <h2 className="experience-sub-title">Software Engineering</h2>

                <div className="article-container">

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>React, JavaScript, TypeScript, HTML/CSS</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Python (Django, Flask), Node.js, C</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>REST APIs, WebSocket &amp; Real-Time Systems</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>MySQL, PostgreSQL, MongoDB</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Payment Integration (Stripe, Custom Gateways)</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Telegram Bot &amp; API Development</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Docker, Linux, Git &amp; CI/CD</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                </div>

              </div>



              <div className="ex-details-container">

                <h2 className="experience-sub-title">Data Science, AI &amp; Robotics</h2>

                <div className="article-container">

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Pandas, NumPy, Matplotlib, Seaborn, SciPy</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>TensorFlow, Keras, PyTorch, Scikit-Learn, XGBoost</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>CNNs, RNNs, Transformers &amp; Computer Vision</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Natural Language Processing (NLP)</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>AI-Powered Diagnostics &amp; Recommendation Systems</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>Robotics, IoT &amp; Hardware Integration</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                  <article>

                    <img src={checkedIcon} alt="check" className="icon" />

                    <div>

                      <h3>QR Code, Biometric &amp; Sensor Systems</h3>

                      <p>Experienced</p>

                    </div>

                  </article>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* Featured Projects */}

        <section className="featured-projects reveal">

          <p className="section_text_p1">Selected Work</p>

          <h1 className="title">Featured Projects</h1>

          <div className="featured-grid">

            <a href="https://thebabeledit.com/" target="_blank" rel="noopener noreferrer" className="featured-card">

              <div className="featured-img-wrap">

                <img src={babelImg} alt="The Babel Edit" />

                <span className="featured-badge">E-Commerce</span>

              </div>

              <div className="featured-info">

                <h3>The Babel Edit — USA</h3>

                <p>Full e-commerce platform with product listings, cart, checkout, and Stripe payment integration.</p>

                <div className="featured-tags">

                  <span>React</span><span>Node.js</span><span>Stripe</span>

                </div>

              </div>

            </a>

            <a href="#" className="featured-card">

              <div className="featured-img-wrap">

                <img src={medicenseImg} alt="MediScence AI" />

                <span className="featured-badge">AI &amp; Healthcare</span>

              </div>

              <div className="featured-info">

                <h3>MediScence AI</h3>

                <p>AI-driven medical diagnostic tool for quick health insights and emergency consultations across Africa.</p>

                <div className="featured-tags">

                  <span>Python</span><span>AI</span><span>NLP</span>

                </div>

              </div>

            </a>

            <a href="https://liorelioraproperties.com" target="_blank" rel="noopener noreferrer" className="featured-card">

              <div className="featured-img-wrap">

                <img src={liorImg} alt="Lior & Eliora Properties" />

                <span className="featured-badge">Real Estate</span>

              </div>

              <div className="featured-info">

                <h3>Lior &amp; Eliora Properties</h3>

                <p>Nigerian real estate platform with structured database for analytics and property management.</p>

                <div className="featured-tags">

                  <span>Django</span><span>PostgreSQL</span><span>Analytics</span>

                </div>

              </div>

            </a>

            <a href="https://lightit-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" className="featured-card">

              <div className="featured-img-wrap">

                <img src={lightitImg} alt="Lightit SLP" />

                <span className="featured-badge">EdTech</span>

              </div>

              <div className="featured-info">

                <h3>Lightit SLP — Ethiopia</h3>

                <p>Science learning platform with AI-powered virtual lab, interactive lessons, and social collaboration.</p>

                <div className="featured-tags">

                  <span>React</span><span>Python</span><span>AI</span>

                </div>

              </div>

            </a>

          </div>

          <div style={{textAlign: 'center', marginTop: '2.5rem'}}>

            <Link to="/projects" className="btn btn-color-1">View All Projects</Link>

          </div>

        </section>



        {/* Testimonials */}

        <section className="testimonials-section reveal">

          <p className="section_text_p1">What Clients Say</p>

          <h1 className="title">Testimonials</h1>

          <div className="testimonials-grid">

            <div className="testimonial-card">

              <div className="testimonial-quote">

                <span className="quote-mark">&ldquo;</span>

                <p>Our project was stuck with a previous developer for months — nothing worked, deadlines kept slipping. Victor came in, understood the entire codebase in days, and delivered a fully working e-commerce platform in record time. The site is live, payments run smoothly, and our customers love it. He saved this project.</p>

              </div>

              <div className="testimonial-author">

                <div className="author-avatar">TB</div>

                <div>

                  <h4>CEO, The Babel Edit</h4>

                  <p>The Babel Edit, USA</p>

                </div>

              </div>

            </div>

            <div className="testimonial-card">

              <div className="testimonial-quote">

                <span className="quote-mark">&ldquo;</span>

                <p>Victor built our entire property management platform from scratch — listing pages, admin dashboard, analytics, everything. He understood our business needs without us having to over-explain. The system handles our daily operations now and clients navigate it with ease. Very reliable developer.</p>

              </div>

              <div className="testimonial-author">

                <div className="author-avatar">LE</div>

                <div>

                  <h4>Managing Director</h4>

                  <p>Lior &amp; Eliora Properties, Nigeria</p>

                </div>

              </div>

            </div>

            <div className="testimonial-card">

              <div className="testimonial-quote">

                <span className="quote-mark">&ldquo;</span>

                <p>We needed someone who could handle both the AI features and the frontend for our science learning platform. Victor delivered both — the virtual lab works beautifully, students are engaging with the lessons, and the platform is stable. He went above and beyond what we asked for.</p>

              </div>

              <div className="testimonial-author">

                <div className="author-avatar">LS</div>

                <div>

                  <h4>Founder</h4>

                  <p>Lightit SLP, Ethiopia</p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>



      <Footer />

      <a href="#profile" className="back-to-top" title="Back to top">&#8593;</a>

    </>

  );

}



export default Home;

