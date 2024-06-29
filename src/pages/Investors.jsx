import kapitaLogo from "../photos/Kapita Logo.png";
import IVP from "../photos/IVP.png";
import euph from "../photos/Euphrates_removebg-preview.png";
import ffc from "../photos/First_Finance.png";
import flat from "../photos/Flat6Labs_with_name-removebg-preview.png";
import usaid from "../photos/usaidlogo-removebg-preview.png";
import iom from "../photos/image-removebg-preview_7.png";
import grofin from "../photos/GroFin-removebg-preview.png";
import Innovest from "../photos/Innovest-removebg-preview.png";

const Investors = () => {
  return (
    <div className="inv-container">
      <h1 className="header-text">Investors</h1>
      <p>
        Connect with a diverse network of investors eager to support innovative
        startups. <br /> Find the perfect match for your funding needs and
        accelerate your business growth with the expertise and resources these
        investors bring.
      </p>
      <div className="logo-container">
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kapita.iq/programs/angel-network"
          >
            <img src={kapitaLogo} alt="kapitaLogo" />
          </a>
        </div>
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://iraqventurepartners.com/"
          >
            <img src={IVP} alt="kapitaLogo" />
          </a>
        </div>
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.euph.com/about"
          >
            <img src={euph} alt="kapitaLogo" />
          </a>
        </div>
        <div className="inv-logo">
          <a target="_blank" rel="noopener noreferrer" href="https://ffc.iq/">
            <img src={ffc} alt="kapitaLogo" width={"130px"} />
          </a>
        </div>
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flat6labs.com/"
          >
            <img src={flat} alt="kapitaLogo" />
          </a>
        </div>
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.usaid.gov/iraq/fact-sheets/durable-communities-and-economic-opportunities-dceotahfeez-project"
          >
            <img src={usaid} alt="kapitaLogo" />
          </a>
        </div>
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://edf.iom.int/en/iraq"
          >
            <img src={iom} alt="kapitaLogo" />
          </a>
        </div>
        <div className="inv-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://innovest.org/"
          >
            <img src={Innovest} alt="kapitaLogo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Investors;
