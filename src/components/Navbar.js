import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import BSNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Badge from "react-bootstrap/Badge";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import OffcanvasFav from "./OffcanvasFav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faHeart,
  faEnvelope,
  faRightToBracket,
  faRightFromBracket,
  faMagnifyingGlass,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/allcss.css";

const Navbar = ({
  cart,
  del,
  clear,
  data,
  dataUser,
  validate,
  auth,
  login,
  logout,
  toastError,
  toastSuccess,
  handleShowLogin,
  showLogin,
  setShowLogin,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <>
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
              <img
                id="nav-bar-logo"
                alt=""
                src="\logoRollingneta.png"
                width="75"
                height="75"
                className="d-inline-block align-top"
              />
            </BSNavbar.Brand>
          </Link>
          <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BSNavbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {auth.user == "user" && (
                <Nav.Link onClick={handleShow}>
                  <Link className="link-nav" style={{ textDecoration: "none" }}>
                    Favoritos
                    <FontAwesomeIcon icon={faHeart} className="mx-2" />
                    <Badge bg="none">{cart.length}</Badge>
                  </Link>
                </Nav.Link>
              )}

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

              {auth.user !== "admin" && (
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
              )}

              <Nav.Link>
                <Link
                  to="/articlefound"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </Link>
              </Nav.Link>
              {auth.user == "admin" && (
                <Nav.Link>
                  {" "}
                  <Link
                    to="/usertable"
                    className="link-nav"
                    style={{ textDecoration: "none" }}
                  >
                    Administrar Usuarios
                    <FontAwesomeIcon
                      icon={faScrewdriverWrench}
                      className="mx-2"
                    />
                  </Link>
                </Nav.Link>
              )}
              <Nav.Link>
                {auth.user ? (
                  <Button className="btn-useradmin ">
                    {auth.user}
                    <FontAwesomeIcon icon={faUser} className="mx-2" />
                  </Button>
                ) : (
                  <Link
                    className="link-nav"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleShowLogin()}
                  >
                    Iniciar sesión
                    <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                  </Link>
                )}
              </Nav.Link>

              {auth.user && (
                <Nav.Link>
                  <Link
                    to="/"
                    className="link-nav"
                    style={{ textDecoration: "none" }}
                    onClick={() => logout()}
                  >
                    Cerrar sesión
                    <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                  </Link>
                </Nav.Link>
              )}

              {!auth.user && (
                <Nav.Link onClick={handleShowRegister}>
                  <Link className="link-nav" style={{ textDecoration: "none" }}>
                    Regístrate
                    <FontAwesomeIcon icon={faUser} className="mx-2" />
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <ModalRegister
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        toastError={toastError}
        toastSuccess={toastSuccess}
        
      />
      <ModalLogin
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        auth={auth}
        validate={validate}
        login={login}
        logout={logout}
        toastError={toastError}
        toastSuccess={toastSuccess}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        handleShowRegister={handleShowRegister}
      />
      <OffcanvasFav
        cart={cart}
        del={del}
        clear={clear}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />
    </>
  );
};

export default Navbar;
