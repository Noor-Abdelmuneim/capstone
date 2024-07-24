import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  description,
  businessNature,
  image,
  email,
  website,
}) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">
            {description}
          </p>
          <Link to={`/startup/${id}`}>
              <button className="startup-button">Read More</button>
            </Link>
          {/* <p className="business-nature">{businessNature}</p> */}
          {/* <a href={`mailto:${email}`} className="email-link">
            <p className="email">{email}</p>
          </a>
          <br />
          <a
            href={website}
            className="website-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
