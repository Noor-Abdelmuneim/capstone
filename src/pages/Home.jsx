import Hero from "../components/Hero";
import Startups from "./Startups";
import Investors from "./Investors";
import Footer from "../components/Footer";
import Instructions from "./Instructions";
import Incubators from "./Incubators";

const Home = () => {
  return (
    <>
      <Hero />
      <Startups />
      <Instructions />
      <Incubators />
      <Investors />
      {/* <Footer/> */}
    </>
  );
};

export default Home;
