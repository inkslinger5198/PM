import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Menu = () => (
  <nav>
    <Link to="nav" smooth={true} duration={100}>
      Home
    </Link>

    <Link to="services" smooth={true} duration={100}>
      Services
    </Link>

    <Link to="wins" smooth={true} duration={100}>
      Wins
    </Link>

    <Link to="contact" smooth={true} duration={100}>
      Contact
    </Link>
    <Link to="about" smooth={true} duration={100}>
      About
    </Link>

    <span></span>
  </nav>
);

const Navbar = () => {
  return (
    <div className="navbar" id="nav">
      <a href="/">
      <div className="navbar-logo">
        
          <div className="navbar-circle">PM</div>
          <div className="navbar-title">
            <h1>Progressor Media</h1>
          </div>
        
      </div>
      </a>

      <div className="navbar-links">
        <Menu />
      </div>

      <div className="navbar-button">
        <a
          className=""
          href="https://app.cal.com/pravitbh/progressor-media"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-1">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
