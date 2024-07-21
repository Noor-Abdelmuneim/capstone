import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Startups from "./pages/Startups";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Investors from "./pages/Investors";
import CardsPage from "./pages/CardsPage";
import SignUp from "./pages/SignUp";
import Incubators from "./pages/Incubators";
import { register } from 'swiper/element/bundle';
import IncubatorsPage from "./pages/IncubatorsPage";
import SingleCard from "./pages/SingleCard";
register();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/incubators" element={<Incubators />} />
          <Route path="/cardsPage" element={<CardsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/incubatorsPage" element={<IncubatorsPage />} />
          <Route path="/startup" element={<SingleCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
