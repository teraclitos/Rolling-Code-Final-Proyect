import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import Publicidad from "./components/Publicidad";
import Contact from "./components/Contact";
import Categorias from "./components/Categorias";

function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Categorias />
      <Footer />
    </div>
  );
}

export default App;
