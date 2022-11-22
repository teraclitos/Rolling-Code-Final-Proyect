import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import BSNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faHeart,
  faEnvelope,
  faRightToBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/navbar.css";
import Badge from "react-bootstrap/Badge";
const Navbar = ({ cart, del, clear }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <BSNavbar
      className="bg-nav "
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BSNavbar.Brand>
            {" "}
            <img
              alt=""
              src="\logoRollingneta.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
            />{" "}
          </BSNavbar.Brand>
        </Link>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link onClick={handleShow}>
              <Link
                to="/"
                className="link-nav"
                style={{ textDecoration: "none" }}
              >
                Favoritos
                <FontAwesomeIcon icon={faHeart} className="mx-2" />
              </Link>
              <Badge bg="primary">{cart.length}</Badge>
              <span className="visually-hidden">Favoritos</span>
            </Nav.Link>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Mis favoritos ({cart.length})</Offcanvas.Title>
                {cart.length > 0 && (
                  <Button variant="danger" onClick={() => clear()}>
                    Limpiar favoritos
                  </Button>
                )}
              </Offcanvas.Header>
              <Offcanvas.Body>
                {cart.length
                  ? cart.map((c, i) => (
                      <Row key={i}>
                        <Col>{c.title}</Col>
                        <Col>{c.price}</Col>
                        <Col>
                          <Button variant="danger" onClick={() => del(c)}>
                            Borrar
                          </Button>
                        </Col>
                      </Row>
                    ))
                  : "Sin favoritos"}
              </Offcanvas.Body>
            </Offcanvas>

            <Nav.Link>
              <Link
                to="/highlights"
                className="link-nav"
                style={{ textDecoration: "none" }}
              >
                Destacados
                <FontAwesomeIcon icon={faStar} className="mx-2" />
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/contacto"
                className="link-nav"
                style={{ textDecoration: "none" }}
              >
                Contacto
                <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/"
                className="link-nav"
                style={{ textDecoration: "none" }}
              >
                Iniciar sesión
                <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/"
                className="link-nav"
                style={{ textDecoration: "none" }}
              >
                Regístrate
                <FontAwesomeIcon icon={faUser} className="mx-2" />
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex d-xl-none d-lg-none">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">
              {" "}
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
            </Button>
          </Form>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
