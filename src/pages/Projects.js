import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/project.css';
import avtekImg from '../assets/img/avtek.png';
import learningImg from '../assets/img/learning_system.png';
import lpclImg from '../assets/img/lpcl.png';
import demiPayImg from '../assets/img/DemiPay.jpeg';
import liorImg from '../assets/img/lioreliora.jpg';
import realestateImg from '../assets/img/realestatems.jpg';
import farmstoreImg from '../assets/img/farmstore.jpg';
import medicenseImg from '../assets/img/medicenseai.jpg';
import agcImg from '../assets/img/agc_church.jpg';
import paauImg from '../assets/img/paau.jpg';
import lightitImg from '../assets/img/lightit-slp.jpg';
import contqImg from '../assets/img/contq-x.jpg';
import babelImg from '../assets/img/the_babel_edit.jpeg';

var projects = [
  {
    img: avtekImg,
    title: "Collaboration Projects",
    desc: "Collection of web development projects built in collaboration with Alvahtek team.",
    tags: ["JavaScript", "HTML/CSS", "Collaboration"],
    status: "live",
    github: null,
    site: "https://alvahtek.com/projects/"
  },
  {
    img: learningImg,
    title: "Bizmarrow Learning Portal",
    desc: "AI-integrated learning management system with student dashboards, course management, and smart recommendations.",
    tags: ["Python", "Django", "AI", "PostgreSQL"],
    status: "live",
    github: "#",
    site: "https://vikky01.pythonanywhere.com/"
  },
  {
    img: lpclImg,
    title: "Lead Partners Consulting",
    desc: "Corporate website for a consulting company with service showcase and client engagement features.",
    tags: ["JavaScript", "Node.js", "CSS"],
    status: "live",
    github: "#",
    site: "https://leadpartnerscltd.com"
  },
  {
    img: demiPayImg,
    title: "DemiPay Payment System",
    desc: "Secure payment processing system with multi-currency support and transaction tracking.",
    tags: ["Python", "Django", "REST API", "Payment"],
    status: "live",
    github: "#",
    site: "https://demipay.fescode.com"
  },
  {
    img: liorImg,
    title: "Lior & Eliora Properties",
    desc: "A Nigerian real estate web app with structured database seamless for analytics and property management.",
    tags: ["Python", "Django", "PostgreSQL", "Analytics"],
    status: "live",
    github: "#",
    site: "https://liorelioraproperties.com"
  },
  {
    img: realestateImg,
    title: "Nigeria Real Estate MS",
    desc: "Management system for clients to track properties, ROI, chat with customer service in real-time, and admins to manage portfolios.",
    tags: ["Python", "Django", "WebSocket", "React"],
    status: "progress",
    github: "#",
    site: null
  },
  {
    img: farmstoreImg,
    title: "FarmStore Telegram Bot",
    desc: "A fully developed Telegram Bot marketplace with escrow service for secure buy and sell transactions.",
    tags: ["Python", "Telegram API", "Bot", "E-Commerce"],
    status: "progress",
    github: "#",
    site: null
  },
  {
    img: medicenseImg,
    title: "MediScence AI",
    desc: "AI-driven medical diagnostic tool for quick health insights, nearby doctor access and emergency consultations across Africa.",
    tags: ["Python", "AI", "NLP", "Healthcare"],
    status: "progress",
    github: "#",
    site: null
  },
  {
    img: agcImg,
    title: "Clock-In Church Database",
    desc: "Smart church system tracking attendance via QR codes and biometrics, managing first-timers, follow-ups, and real-time analytics.",
    tags: ["Python", "Django", "QR Code", "Biometrics"],
    status: "private",
    github: "#",
    site: null
  },
  {
    img: paauImg,
    title: "PAAU University System",
    desc: "Digital platform automating student admissions, course registration, results processing, and fee management.",
    tags: ["Python", "Django", "MySQL", "Admin"],
    status: "live",
    github: "#",
    site: "http://muhamed-school-fee-verification.fescode.com/"
  },
  {
    img: lightitImg,
    title: "Lightit SLP — Ethiopia",
    desc: "Science learning platform for Ethiopian students with AI-powered virtual lab, interactive lessons, and social collaboration hub.",
    tags: ["React", "Python", "AI", "Education"],
    status: "live",
    github: "#",
    site: "https://lightit-frontend.onrender.com/"
  },
  {
    img: contqImg,
    title: "ConseQ-X Assessment",
    desc: "AI-driven CEO and company assessment platform analyzing leadership effectiveness, performance, and market positioning.",
    tags: ["Python", "AI", "Analytics", "React"],
    status: "private",
    github: "#",
    site: "https://conse-q-x-landing.vercel.app/"
  },
  {
    img: babelImg,
    title: "The Babel Edit — USA",
    desc: "Robust e-commerce platform like Temu with product listings, cart, checkout, and order management.",
    tags: ["React", "Node.js", "E-Commerce", "Stripe"],
    status: "live",
    github: "#",
    site: "https://thebabeledit.com/"
  }
];

var statusLabels = {
  live: { label: "Live", cls: "status-live" },
  progress: { label: "In Progress", cls: "status-progress" },
  private: { label: "Private Access", cls: "status-private" }
};

function Projects() {
  useScrollReveal();

  return (
    <>
      <Navbar homeLinks={false} />

      <section id="projects">
        <p className="section_text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="project-containers">
            {projects.map(function(p, i) {
              var st = statusLabels[p.status];
              return (
                <div className="color-container reveal" key={i}>
                  <div className="article-container" style={{overflow: 'hidden'}}>
                    <img src={p.img} alt={p.title} className="project-img" />
                  </div>
                  <h2 className="project-title">{p.title}</h2>
                  <span className={'project-status ' + st.cls}>{st.label}</span>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(function(tag, j) {
                      return <span className="project-tag" key={j}>{tag}</span>;
                    })}
                  </div>
                  <div className="btn-container">
                    {p.github && (
                      <button className="btn project-btn" onClick={function() { window.open(p.github, '_blank'); }}>GitHub</button>
                    )}
                    {p.site && (
                      <button className="btn project-btn" onClick={function() { window.open(p.site, '_blank'); }}>Visit Site</button>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="more-coming reveal">
              <p>More projects coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <a href="#projects" className="back-to-top" title="Back to top">&#8593;</a>
    </>
  );
}

export default Projects;
