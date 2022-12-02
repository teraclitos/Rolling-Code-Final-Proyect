import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column m-auto">
      <Spinner animation="grow" size="sm" variant="primary" />
      <span>Cargando ...</span>
    </Container>
  );
};

export default Loader;
