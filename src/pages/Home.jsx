import Hero from "../components/Hero";
import Startups from "./Startups";
import Investors from "./Investors";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Instructions from "./Instructions";
import Incubators from "./Incubators";

const Home = () => {
  return (
    <>
      <Hero />
      <Startups />
      <Instructions/>
      <Incubators/>
      <Investors />
      <Contact />
      {/* <Footer/> */}
    </>
  );
};

export default Home;
