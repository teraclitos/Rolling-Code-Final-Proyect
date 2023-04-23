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
        <div className="load-4 d-flex align-items-center justify-content-center flex-column ">
          <p className="text-loader fs-5">Cargando...</p>
          <div className="ring-1"></div>
        </div>
      </div>
    </Container>
  );
};

export default Loader;
