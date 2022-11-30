import React from "react";
import "../styles/error404.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <body className="body-error">
        <div>
          <Container fluid className="error404">
            <h3 className="text-404">Oop! Page not found.</h3>

            <h1 className="text-404">404</h1>

            <Link
              className="btn-404 "
              to="/"
              style={{ textDecoration: "none" }}
            >
              Go back home
            </Link>
          </Container>
        </div>
      </body>
    </>
  );
};

export default Error404;
