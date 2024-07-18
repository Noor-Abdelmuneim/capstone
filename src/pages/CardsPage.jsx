import Card from "../components/Card";
import companypic from "../components/Assets/Building-cuate.png.jpg";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CardsPage = () => {
  return (
    <div className="startups-container">
      <h1 className="header-cards">Startups In Iraqi Market</h1>
      <p className="cards-p">Discover a dynamic community of Iraqi startups innovating across technology, energy, healthcare, education, and e-commerce, shaping Iraq's evolving business landscape and promising future.</p>
      <div className="cards">
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
        <Card
          name="Company name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
"
          picture={companypic}
        />
      {/* <Pagination count={10} color="primary" /> */}

      </div>
    </div>
  );
};

export default CardsPage;
