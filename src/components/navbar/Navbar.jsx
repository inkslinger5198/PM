import React from "react";
import "./navbar.css";
import Logo from "../../assets/3.png";
import { Link, animateScroll as scroll } from "react-scroll";
const Menu = () => (
  <>
    <p>
      <Link to="nav" smooth={true} duration={100}>
        Home
      </Link>
    </p>
    <p>
      <Link to="services" smooth={true} duration={100}>
        Services
      </Link>
    </p>
    <p>
      <Link to="testimonial" smooth={true} duration={100}>
        Wins
      </Link>
    </p>
    <p>
      <Link to="contact" smooth={true} duration={100}>
        Contact
      </Link>
    </p>
    <p>
      <Link to="about" smooth={true} duration={100}>
        About
      </Link>
    </p>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar" id="nav">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar-links">
        <Menu />
      </div>

      <div className="navbar-button">
        <a
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
