import React from "react";
import { Link } from "react-router-dom";
import UpBtn from "../photos/up-arrow.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <body>
      <footer class="footer">
        <div className="up-btn">
        <Link>
          <img
          src={UpBtn}
          width={"55px"}
          alt="btn"
            onClick={scrollToTop}
          />
           
          </Link>
        </div>
        <ul class="menu">
          <li>
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cardsPage" className="menu__link">
              Startups
            </Link>
          </li>
          <li>
            <Link to="/investors" className="menu__link">
              Investors
            </Link>
          </li>
          <li>
            <Link to="/incubatorsPage" className="menu__link">
              Incubators
            </Link>
          </li>
        </ul>
        <p>&copy;2024 Iraqi Startup Hub | All Rights Reserved</p>
      </footer>
    </body>
  );
};

export default Footer;
