import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Use Link for routing
import '../styles/NavBar.css';
import logo from '../assets/Logo/Women_In_Tech_Logo.png';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navBar">
      {/* Logo */}
      <div className="navbar-leftside">
        <Link to="/">
          <img src={logo} alt="Women in Tech Logo" className="wit-logo" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links (Same for Desktop & Mobile) */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/aboutUs">About</Link></li>
        <li><Link to="/about/team">Team</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/join">Join Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
