import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading/Loading";
import Footer from "./Footer";
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
  if (error) return <p>Error: {error.message}</p>;
  if (!companyData) return <p>No data available</p>;

  const { Company_Name, About, email, website, business_nature, img } =
    companyData;

  return (
    <div className="single-card" id={id}>
      <div className="single-card-content">
        <div className="single-card-title">
          <h1 className="header-text"> {Company_Name}</h1>
        </div>
        <div className="single-card-img">
          <img src={img} alt="Company Logo" />
        </div>
        <h2>About The Company:</h2>
        <p>{About}</p>
        <p className="business-nature">{business_nature}</p>
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
