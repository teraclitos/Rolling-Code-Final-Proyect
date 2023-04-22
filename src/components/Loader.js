import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import "../styles/allcss.css";

const Loader = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center flex-column loader-container"
    >
      <div className="load-wrapp">
        <div className="load-4">
          <p>Cargando...</p>
          <div className="ring-1"></div>
        </div>
      </div>
    </Container>
  );
};

export default Loader;
