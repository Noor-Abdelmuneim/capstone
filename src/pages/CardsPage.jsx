import Card from "../components/Card";
import companypic from "../components/Assets/Building-cuate.png.jpg";

const CardsPage = () => {
  return (
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
    </div>
  );
};

export default CardsPage;
