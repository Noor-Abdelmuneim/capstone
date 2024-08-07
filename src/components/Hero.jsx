import { Link } from "react-router-dom";
import building from "../photos/6242207.jpg";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-container">
          <h1 className="header-text">
            Your <span>Premier</span> Choice for Investing in{" "}
            <span>Startups</span>
          </h1>
          <p>
            Discover the most promising startups and secure your financial
            future with our expert guidance. Join a community of
            forward-thinking investors and gain access to exclusive
            opportunities that can transform your investment portfolio.
          </p>
          <div className="hero-btns">
            <Link to="/cardsPage">
              <button className="btn btn-contained">Startups</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outlined">Register with Us</button>
            </Link>
          </div>
        </div>
        <img src={building} alt="building" className="hero-image" />
      </div>
    </>
  );
};

export default Hero;
