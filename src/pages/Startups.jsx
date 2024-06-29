import { Link } from "react-router-dom";
import Card from "../components/Card";
import companypic from "../components/Assets/Building-cuate.png.jpg";

const Startups = () => {
  return (
    <div className="main-container">
      <div className="startups-container">
        <h1 className="header-text">Explore Startups Now</h1>
        <p className="startups-pargraph">
          Explore the innovative startups transforming the Iraqi market.
        </p>
      </div>
      <div className="cards">
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum delectus beatae quaerat enim nobis ipsam veniam. Voluptate, quia quod.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum delectus beatae quaerat enim nobis ipsam veniam. Voluptate, quia quod.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum delectus beatae quaerat enim nobis ipsam veniam. Voluptate, quia quod.
"
          picture={companypic}
        />
      </div>
      <div className="startups-container">
        <Link to="/cardspage">
          <button className="startups-button">View All Startups</button>
        </Link>
      </div>
    </div>
  );
};

export default Startups;
