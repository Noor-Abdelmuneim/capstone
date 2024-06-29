import React from "react";

export default function Card({name , description , picture}) {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={picture} alt=""/>
        <div className="card-text">
        <h4>{name}</h4>
        <p>
          {description}
        </p>
        {/* <Link to="/singlecard">
          <button>Explore More</button>
        </Link> */}
        </div>
      </div>
    </div>
  );
}
