import React from "react";
import { Link } from "react-router-dom";
import companypic from "./Assets/Building-cuate.png";

export default function Cards() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={companypic} alt="company" width={150} height={150} />
        <h4>Company Name</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          voluptate.
        </p>
        <Link to="/singlecard">
          <button>Explore More</button>
        </Link>
      </div>
    </div>
  );
}
