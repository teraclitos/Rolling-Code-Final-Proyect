import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Articlepublicitygrid from "../src/components/Articlepublicitygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Publicidad from "./components/Publicidad";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Articlepublicitygrid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
