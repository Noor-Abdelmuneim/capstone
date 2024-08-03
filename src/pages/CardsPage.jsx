import { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loading from "../components/Loading/Loading";

const CardsPage = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:1cUXcVZQ/startups"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStartups(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Loading />;
  if (!startups) return <p>No data available</p>;

  return (
    <div className="startups-container">
      <h1 className="header-cards">Startups in the Iraqi Market</h1>
      <p className="cards-p">
        Explore a vibrant community of Iraqi startups driving innovation in
        technology, energy, healthcare, education, and e-commerce, influencing
        Iraq's dynamic business landscape and promising future.
      </p>
      <div className="cards">
        {startups.map((startup) => (
          <div key={startup.id}>
            <Card
              id={startup.id}
              name={startup.company_name}
              description={startup.about}
              image={startup.company_logo.url}
            />
          </div>
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={10}
          sx={{
            padding: "20px 0 40px",
            display: "flex",
            justifyContent: "center",
          }}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default CardsPage;
