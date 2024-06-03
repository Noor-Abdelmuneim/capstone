import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Startups from "./pages/Startups";
import { ProductsProvider } from "./Store/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Investors from "./pages/Investors";
import Incubators from "./pages/Incubators";
import CardsPage from "./pages/CardsPage";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/incubators" element={<Incubators />} />
            <Route path="/cardspage" element={<CardsPage />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
