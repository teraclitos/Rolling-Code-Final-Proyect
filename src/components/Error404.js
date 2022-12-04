import React from "react";
import "../styles/error404.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <body className="body-error mt-auto">
        <Container>
          <section className="error 404">
            <h1 className="text-404 mt-5">404</h1>
            <h2 className="p-404">Pagina no encontrada</h2>
          </section>
          <Link
            className="btn-404 mt-5"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Go back home
          </Link>
        </Container>
      </body>
    </>
  );
};

export default Error404;
