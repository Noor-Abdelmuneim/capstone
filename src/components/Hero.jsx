import building from "./Assets/building.jpg";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-container">
          <h1>Your First Choice For Investing In Start-ups</h1>
          <p>Discover The Start-ups In The Iraqi Market</p>
          <Button variant="contained" color="success">
            View More
          </Button>
        </div>
        <img src={building} alt="building" className="hero-image" />
      </div>
    </>
  );
};

export default Hero;
