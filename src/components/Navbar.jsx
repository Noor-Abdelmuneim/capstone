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
          <Link to="/investors">Investors</Link>
        </li>
        <li>
          <Link to="/incubators">Incubators</Link>
        </li>
        <Button variant="contained" sx={{ margin: "10px  10px 10px 950px" }}>
          Login
        </Button>
        <Button variant="contained" color="success">
          Sign Up
        </Button>
      </ul>
    </>
  );
};

export default Navbar;
