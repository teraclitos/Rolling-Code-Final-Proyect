import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import BSNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

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
  setAuth,
  login,
  logout,
  toastError,
  toastSuccess,
  handleShowLogin,
  showLogin,
  setShowLogin,
  isLoading,
  setIsLoading,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavoriteFetch,
  loadFavorite,
  setLoadFavorite,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleLogout = async (e) => {
    fetch("https://backend-news-eight.vercel.app/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        logout();
      })

      .catch((error) => toastError(error));
  };

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
            <Nav className="d-flex align-items-center">
              {auth.role === "user" && (
                <Nav onClick={handleShow}>
                  <Link className="link-nav" style={{ textDecoration: "none" }}>
                    Favoritos
                    <FontAwesomeIcon icon={faHeart} className="mx-2" />
                    {loadFavorite ? (
                      <Spinner animation="grow" className="loader-favorite" />
                    ) : (
                      <Badge bg="none">{cart.length}</Badge>
                    )}
                  </Link>
                </Nav>
              )}

              <Nav className="me-0 me-lg-3 mb-1 mb-lg-0">
                <Link
                  to="/highlights"
                  className="link-nav "
                  style={{ textDecoration: "none" }}
                >
                  Destacados
                  <FontAwesomeIcon icon={faStar} className="mx-2" />
                </Link>
              </Nav>

              {(!auth.user || auth.role === "user") && (
                <Nav className="me-0 me-lg-3 mb-0 mb-lg-0">
                  <Link
                    to="/contacto"
                    className="link-nav"
                    style={{ textDecoration: "none" }}
                  >
                    Contacto
                    <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                  </Link>
                </Nav>
              )}

              <Nav className="me-0 me-lg-3 mb-1 mb-lg-0">
                <Link
                  to="/articlefound"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </Link>
              </Nav>
              {auth.role === "admin" && (
                <Nav className="me-0 me-lg-3 mb-3 mb-lg-0">
                  <Link
                    onClick={() => {
                      setIsLoading(true);
                    }}
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
                </Nav>
              )}
              <Nav className="me-0 me-lg-3 mb-3 mb-lg-0">
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
              </Nav>

              {auth.user && (
                <Nav className="me-0 me-lg-3 mb-3 mb-lg-0">
                  <Link
                    to="/"
                    className="link-nav"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleLogout()}
                  >
                    Cerrar sesión
                    <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                  </Link>
                </Nav>
              )}

              {!auth.user && (
                <Nav onClick={handleShowRegister}>
                  <Link className="link-nav" style={{ textDecoration: "none" }}>
                    Regístrate
                    <FontAwesomeIcon icon={faUser} className="mx-2" />
                  </Link>
                </Nav>
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
        setLoadFavorite={setLoadFavorite}
      />
      <OffcanvasFav
        cart={cart}
        del={del}
        clear={clear}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        deleteFavorite={deleteFavorite}
        setDeleteFavorite={setDeleteFavorite}
        modifyFavoriteFetch={modifyFavoriteFetch}
        auth={auth}
      />
    </>
  );
};

export default Navbar;
