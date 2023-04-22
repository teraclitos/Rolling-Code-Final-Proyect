import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import "../styles/allcss.css";

const Loader = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center flex-column loader-container"
    >
      <Spinner animation="grow" className="loader" />
      <span>Cargando ...</span>
    </Container>
  );
};

export default Loader;
