import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/money.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="brand-logo">
          <img src={logo} alt={"/"} width={"35px"} />
        </Link>
        <button className="burger-menu" onClick={toggleMenu}>
          <span className="burger-icon"></span>
        </button>
      </div>
      <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname.startsWith("/startups") ? "active" : ""
          }`}
        >
          <Link to="/startups">Start-ups</Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname.startsWith("/investors") ? "active" : ""
          }`}
        >
          <Link to="/investors">Investors & Incubators</Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <div className={`nav-btns ${isOpen ? "active" : ""}`}>
        <Link to="/loginpage">
          <button className={"button-18"}>Login</button>
        </Link>
        <Link to="/signup">
          <button className={"button-18"}>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
