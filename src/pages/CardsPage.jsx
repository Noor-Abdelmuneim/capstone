import Card from "../components/Card";
import companypic from "../components/Assets/Building-cuate.png.jpg";

const CardsPage = () => {
  return (
    <div className="startups-container">
      <h1 className="header-cards">Startups In Iraqi Market</h1>
      <p className="cards-p">Discover a vibrant community of Iraqi startups driving forward innovation across various sectors. These entrepreneurial ventures are pioneering solutions in technology, energy, healthcare, education, and e-commerce. Each startup brings unique perspectives and ambitions, contributing to Iraq's evolving business landscape and promising future.</p>
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
      </div>
    </div>
  );
};

export default CardsPage;
