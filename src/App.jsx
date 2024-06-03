import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Startups from "./pages/Startups";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Investors from "./pages/Investors";
import CardsPage from "./pages/CardsPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cardspage" element={<CardsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
