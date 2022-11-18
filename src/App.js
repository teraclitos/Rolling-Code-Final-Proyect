import Navbar from "../src/components/Navbar";
import Footer from '../src/components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import Publicidad from "./components/Publicidad";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
