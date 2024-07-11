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
            <Stack spacing={1.5} direction={{ xs: "column", sm: "row" }}>
              <Link to="/startups">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    padding: "18px 77px",
                    backgroundColor: "#1769AA",
                    textTransform: "none",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "bold",
                    fontSize:"1.1rem",
                    "&:hover": {
                      backgroundColor: "#007bff3",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
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
                    borderRadius: "20px",
                    padding: "17px 39px",
                    border: "3px solid #1769AA",
                    textTransform: "none",
                    color: "#1769AA",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "700",
                    fontSize:"1.1rem",
                    "&:hover": {
                      backgroundColor: "#007bff3",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Register with Us
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
        <img src={building} alt="building" className="hero-image" />
      </div>
    </>
  );
};

export default Hero;
