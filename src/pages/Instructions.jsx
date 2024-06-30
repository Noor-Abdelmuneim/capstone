import Card from "../components/Card";
import BrowseIcon from "../components/icon/PageIcon/BrowsIcon";
import PageIcon from "../components/icon/PageIcon/PageIcon";
import ThirdIcon from "../components/icon/PageIcon/ThirdIcon";

const Instructions = () => {
  return (
    <div className="container">
      <div className="instruction-container">
        <h1 className="header-text">
          How to Begin Investing in Startups with Our Guide
        </h1>
        <p className="instruction-pargraph">
          Follow these steps to register and find the right company for
          investment:
        </p>
      </div>
      <div className="cards">
        <Card
          picture={PageIcon}
          name="Create an Account"
          description="Sign up for a free investor account to get started."
        />
        <Card
          picture={BrowseIcon}
          name="Browse"
          description="Explore various investment opportunities."
        />
        <Card
          picture={ThirdIcon}
          name="Invest in Startups"
          description="Connect with the company that meets your criteria and make your investment."
        />
      </div>
    </div>
  );
};

export default Instructions;
