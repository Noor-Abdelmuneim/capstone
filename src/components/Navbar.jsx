import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/money.png";
import { Button, Stack } from "@mui/material";

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
          <img src={logo} alt={"/"} width={"45px"} />
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
        <Stack spacing={1} direction="row">
          <Link to="/loginpage">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "8px",
                paddingLeft: "33px",
                paddingRight: "33px",
                margin:"5px",
                "&:hover": {
                  backgroundColor: "#007bff3",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                paddingLeft: "30px",
                paddingRight: "30px",
                margin:"5px",
                "&:hover": {
                  backgroundColor: "#007bff3",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
