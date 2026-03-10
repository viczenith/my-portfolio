import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ homeLinks }) {
  var menuOpen = false;
  var setMenuOpen;

  [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav id="desktop-nav">
      <Link to="/" className="logo">Victor<span>.</span></Link>
      <div className={'hb-menu' + (menuOpen ? ' open' : '')} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <ul className={'nav-links' + (menuOpen ? ' open' : '')}>
          {homeLinks ? (
            <>
              <li><a href="#about" onClick={function() { setMenuOpen(false); }}>About</a></li>
              <li><a href="#experience" onClick={function() { setMenuOpen(false); }}>Experience</a></li>
            </>
          ) : (
            <>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Experience</Link></li>
            </>
          )}
          <li><Link to="/projects" onClick={function() { setMenuOpen(false); }}>Projects</Link></li>
          <li><Link to="/contact" onClick={function() { setMenuOpen(false); }}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
