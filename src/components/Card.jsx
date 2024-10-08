import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, description = "", image }) => {
  const truncatedDescription = description
    ? description.slice(0, 40) + "..."
    : "No description available.";

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{truncatedDescription}</p>
          <div className="startup-button-container">
          <Link to={`/startupDetails/${id}`}>
            <button className="startup-button">Read More</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
