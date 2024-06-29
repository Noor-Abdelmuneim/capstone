import Card from "../components/Card";
import {firstPhoto} from "../photos/1.png"
import {secondPhoto} from "../photos/2.png"
import {thirdPhoto} from "../photos/3.png"

const Instructions = () => {
    return ( 
        <div className="container">
        <div className="instruction-container">
          <h1 className="header-text">How to Begin Investing in Startups with Our Guide</h1>
          <p className="instruction-pargraph">Follow these steps to register and find the right company for investment:</p>
        </div>
        <div className="cards">
          <Card name="Create an Account" description="Sign up for a free investor account to get started." />
          <Card name="Browse" description="Explore various investment opportunities."/>
          <Card name="Invest in Startups" description="Connect with the company that meets your criteria and make your investment." />
        </div>
      </div>
     );
}
 
export default Instructions;