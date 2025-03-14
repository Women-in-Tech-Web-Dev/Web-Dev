import React from 'react';
import { Link } from 'react-router-dom';  
import '../Styles/NavBar.css';
import logo from '../assets/Logo/Women_In_Tech_Logo_pink.png';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="navbar-leftside">
                <Link to="/" className="logo">  
                    <img
                        src={logo}
                        alt="Women in Tech Logo"
                        className="wit-logo"
                    />
                </Link>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>  
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className="dropbutton">
                                About
                                <i className="caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/about/aboutUs">About Us</Link>  
                                <Link to="/about/team">Meet Our Team!</Link>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/events" className="nav-link">Events</Link></li>
                    <li><Link to="/join" className="nav-link">Join Us</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


