import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, description, picture, email }) {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={picture} alt="" />
        <div className="card-text">
          <h4 className="h-card">{name}</h4>
          <p className="p-card">
            {description}
            <Link to="/startup">
              <button className="startup-button">Read More</button>
            </Link>
          </p>
          <a href={`mailto:${email}`} className="email-link">
            <p className="email">{email}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
