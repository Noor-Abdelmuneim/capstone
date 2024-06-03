import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Startups = () => {
  return (
    <>
      <div className="startups-container">
        <h1>Explore Startups Now</h1>
        <p>Discover The Startups In The Iraqi Market</p>
      </div>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="startups-container">
        <Link to="/cardspage">
          <button className="startups-button">View All Startups</button>
        </Link>
      </div>
    </>
  );
};

export default Startups;
