import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Articlepublicitygrid from "../src/components/Articlepublicitygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Publicidad from "./components/Publicidad";
import Contact from "./components/Contact";
import Categorias from "./components/Categorias";

function App() {
  return (
    <div>
      <Navbar />
      <Articlepublicitygrid />
      <Contact />
      <Categorias />
      <Footer />
    </div>
  );
}

export default App;
