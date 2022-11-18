import React from "react";

import Container from "react-bootstrap/Container";
import BSNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faEnvelope,
  faRightToBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/navbar.css";
import Badge from "react-bootstrap/Badge";
const Navbar = () => {
  return (
    <BSNavbar
      className="bg-nav"
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <BSNavbar.Brand href="#home">
          {" "}
          <img
            alt=""
            src="\logoRollingneta.png"
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{" "}
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#home">
              Favoritos
              <FontAwesomeIcon icon={faHeart} className="mx-2" />
              <Badge bg="primary">9</Badge>
              <span className="visually-hidden">Favoritos</span>
            </Nav.Link>
            <Nav.Link href="">
              Destacados
              <FontAwesomeIcon icon={faStar} className="mx-2" />
            </Nav.Link>
            <Nav.Link href="">
              Contacto
              <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
            </Nav.Link>
            <Nav.Link href="">
              Iniciar sesión
              <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
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
