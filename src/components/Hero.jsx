import { Link } from "react-router-dom";
import building from "./Assets/Building.png";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-container">
          <h1 className={"header-text"}>
          Your Premier Choice for Investing in Startups
          </h1>
          <p>
            Iraq Startup Hub connects innovative startups with visionary
            investors seeking impactful opportunities in Iraq's burgeoning
            market.
          </p>
          <Stack spacing={1.5} direction="row">
            <Link to="/startups">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "9px",
                  padding: "16px 70px",
                  "&:hover": {
                    backgroundColor: "#007bff3",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    margin:"10px",
                  },
                }}
              >
                Startups
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "9px",
                  padding: "16px 70px",
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
        <img src={building} alt="building" className="hero-image" />
      </div>
    </>
  );
};

export default Hero;
