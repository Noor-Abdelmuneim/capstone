import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import companypic from '../components/Assets/Münster,_LVM,_Bürogebäude_--_2013_--_5149-51.jpg';

const SingleCard = ({ id }) => {
  const [companyData, setCompanyData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:1cUXcVZQ/startups/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCompanyData(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);


  return (
    <div className="single-card" id={id}>
      <div className="single-card-content">
        <div className="single-card-title">
          <h1>{companyData.companyName}</h1>
        </div>
        <div className="single-card-img">
          <img src={companypic} width="40%" alt="Company Logo" />
        </div>
        <h3>About The Company:</h3>
        <p>{companyData.about}</p>
        <a href={`mailto:${companyData.email}`} className="email-link">
          <p className="email">{companyData.email}</p>
        </a>
        <Link to={companyData.url} target="_blank" rel="noopener noreferrer">
          <button className="visit-button">Visit Website</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
