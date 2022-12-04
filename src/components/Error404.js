import React from "react";
import "../styles/error404.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <body className="body-error mt-auto">
        <Container>
          <section className="error 404"></section>
        </Container>
      </body>
    </>
  );
};

export default Error404;
