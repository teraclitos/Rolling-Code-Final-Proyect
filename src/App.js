
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div>

      <Navbar />
      <h1 className="mb-5 mt-5 fs-1">Blog grupo 2</h1>
      <FontAwesomeIcon icon={faFutbol} />


    </div>
  );
}

export default App;
