import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#startups">Start-ups</a>
        </li>
        <li>
          <a href="#investors">Investors</a>
        </li>
        <li>
          <a href="#incubators">Incubators</a>
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
