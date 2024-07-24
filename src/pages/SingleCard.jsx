import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import companypic from "../components/Assets/Münster,_LVM,_Bürogebäude_--_2013_--_5149-51.jpg"

const SingleCard = ({ companyName, about, email, url, id }) => {
    return (
        <div className="single-card" id={id}>
            <div className="single-card-content">
                <div className="single-card-title">
                    <h1>company name{companyName}</h1>
                </div>
                <div className="single-card-img">
                    <img src={companypic} width="40%" alt="Company Logo" />
                </div>
                <h3>About The Company:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque odit illo ipsum exercitationem facere sint quos, a necessitatibus iusto recusandae rerum iste voluptates ut, natus repellendus est! Atque, facere?{about}</p>
                <a href={`mailto:${email}`} className="email-link">
                    <p className="email">email{email}</p>
                </a>
                <Link to={url} target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Visit Website</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCard;