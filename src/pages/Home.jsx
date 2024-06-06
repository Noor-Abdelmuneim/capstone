import Hero from "../components/Hero";
import Startups from "./Startups";
import Investors from "./Investors";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Startups  />
      <Investors />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;
