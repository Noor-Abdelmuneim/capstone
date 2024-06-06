import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/startups">Start-ups</Link>
        </li>
        <li>
          <Link to="/investors">Investors & Incubators</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <div className="nav-btns" style={{float:"right"}}>
        <Link to="/loginpage">
          <Button variant="contained" >
            Login
          </Button>
        </Link>
        <Link to="/signup">
        <Button variant="contained" color="success"sx={{margin:"10px"}}>
          Sign Up
        </Button>
        </Link>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
