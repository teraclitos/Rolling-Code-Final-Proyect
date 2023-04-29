import React from "react";
import "../styles/error404.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = ({
  setIsLoading,
  setNewLoad,
  newLoad,
  setIsLoadingHighlight,
}) => {
  const titleDoc = (document.title = `LA ROLLINGNETA | ERROR 404`);
  return (
    <>
      <div className="body-error d-flex justify-content-center align-items-center">
        <Container>
          <section className="error 404 mb-5">
            <h1 className="text-404 ">404</h1>
            <h2 className="p-404">Pagina no encontrada</h2>
          </section>
          <Link
            className="btn-404 "
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => {
              setNewLoad(newLoad + 1);
              setIsLoading(true);
              setIsLoadingHighlight(true);
            }}
          >
            Go back home
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Error404;
