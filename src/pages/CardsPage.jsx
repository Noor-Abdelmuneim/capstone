import Card from "../components/Card";
import companypic from "../components/Assets/Building-cuate.png.jpg";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "../components/Footer";

const CardsPage = () => {
  return (
    <>
      <div className="startups-container">
        <h1 className="header-cards">Startups in the Iraqi Market</h1>
        <p className="cards-p">Explore a vibrant community of Iraqi startups driving innovation in technology, energy, healthcare, education, and e-commerce, influencing Iraq's dynamic business landscape and promising future.</p>
        <div className="cards">
          {[...Array(12)].map((_, index) => (
            <Card
              key={index}
              name="Company name"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              picture={companypic}
              email="support@alsaree3.com"
            />
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
      <Footer />
    </>

  );
};

export default CardsPage;
