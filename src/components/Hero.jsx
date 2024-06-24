import { Link } from "react-router-dom";
import building from "./Assets/Building.png";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blueGrey
 } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey
[500]),
  backgroundColor: blueGrey
[500],
  '&:hover': {
    backgroundColor: blueGrey
[700],
  },
}));


const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-container">
          <h1 className={"header-text"}>Invest in Iraq's Future: Discover Startup Opportunities</h1>
          <p>
            Iraq Startup Hub connects innovative startups with visionary
            investors seeking impactful opportunities in Iraq's burgeoning
            market.
          </p>
          <Link to="/startups">
            <Stack direction="row">
              <ColorButton variant="contained" sx={{
                borderRadius: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
                // margin:"100px",
              }}>View More</ColorButton>
            </Stack>
          </Link>
        </div>
        <img src={building} alt="building" className="hero-image" />
      </div>
    </>
  );
};

export default Hero;
