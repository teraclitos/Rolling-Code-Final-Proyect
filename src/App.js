import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Articlepublicitygrid from "../src/components/Articlepublicitygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Publicidad from "./components/Publicidad";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Articlepublicitygrid />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
