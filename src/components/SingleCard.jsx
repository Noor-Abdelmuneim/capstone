import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading/Loading";

const SingleCard = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://x8ki-letl-twmt.n7.xano.io/api:1cUXcVZQ/startups/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Loading />;
  if (!companyData) return <p>No data available</p>;

  const { company_name, about, email, website, business_nature, company_logo } =
    companyData;

  return (
    <div className="single-card" id={id}>
      <div className="single-card-content">
        <div className="single-card-title">
          <h1 className="header-text"> {company_name}</h1>
        </div>
        <div className="single-card-img">
          <img src={company_logo.url} alt="Company Logo" />
        </div>
        <p className="business-nature">{business_nature}</p>
        <h2>About Company</h2>
        <p>{about}</p>
       
        <a href={`mailto:${email}`} className="email-link">
          <p className="email">{email}</p>
        </a>
        <Link to={website} target="_blank" rel="noopener noreferrer">
          <button className="visit-button">Visit Website</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
