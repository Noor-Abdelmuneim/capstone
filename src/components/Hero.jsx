import { Link } from "react-router-dom";
import building from "./Assets/Building.png";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-container">
          <h1>Invest in Iraq's Future: Discover Startup Opportunities</h1>
          <br />
          <p>
            Iraq Startup Hub connects innovative startups with visionary
            investors seeking impactful opportunities in Iraq's burgeoning
            market.
          </p>
          <br />
          <Link to="/startups">
            <button className={"button-18"}>View More</button>
          </Link>
        </div>
        <img src={building} alt="building" className="hero-image" />
      </div>
    </>
  );
};

export default Hero;
