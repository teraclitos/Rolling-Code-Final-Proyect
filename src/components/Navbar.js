import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BSNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import ModalCreateNew from "./ModalCreateNew";
import OffcanvasFav from "./OffcanvasFav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faStar,
  faUser,
  faHeart,
  faEnvelope,
  faRightToBracket,
  faRightFromBracket,
  faSquarePen,
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
  setIsLoadingHighlight,
  newLoad,
  setNewLoad,
  totalHighlights,
  showNew,
  setShowNew,
  handleShowNew,
  handleCloseNew,
}) => {
  const [show, setShow] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const logoutModal = () => {
    setOpenLogout(false);
  };
  const navigation = useNavigate();
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
        toastSuccess("Sesión cerrada correctamente");
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
                onClick={() => {
                  setIsLoading(true);
                  setIsLoadingHighlight(true);
                  setNewLoad(newLoad + 1);
                }}
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

              {totalHighlights.length > 0 && (
                <Nav className="me-0 me-lg-3 mb-1 mb-lg-0">
                  <Link
                    to={auth.user ? "/highlights" : window.location.pathname}
                    className="link-nav "
                    onClick={() => {
                      if (auth.user) {
                        setIsLoadingHighlight(true);

                        setNewLoad(newLoad + 1);
                      } else {
                        handleShowLogin();
                      }
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    Destacados
                    <FontAwesomeIcon icon={faStar} className="mx-2" />
                  </Link>
                </Nav>
              )}
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
                  to={auth.user ? "/articlefound" : window.location.pathname}
                  className="link-nav"
                  onClick={() => {
                    if (auth.user) {
                      setIsLoading(true);
                      setNewLoad(newLoad + 1);
                    } else {
                      handleShowLogin();
                    }
                  }}
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
                      setNewLoad(newLoad + 1);
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
              {auth.role === "admin" && (
                <Nav
                  onClick={() => {
                    handleShowNew();
                  }}
                  className="me-0 me-lg-3 mb-3 mb-lg-0"
                >
                  <div className="link-nav" style={{ cursor: "pointer" }}>
                    Crear Noticia
                    <FontAwesomeIcon icon={faSquarePen} className="mx-2" />
                  </div>
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
                  <div
                    className="link-nav"
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpenLogout(true)}
                  >
                    Cerrar sesión
                    <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                  </div>
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

      <ModalCreateNew
        showNew={showNew}
        setShowNew={setShowNew}
        handleShowNew={handleShowNew}
        handleCloseNew={handleCloseNew}
        toastError={toastError}
        toastSuccess={toastSuccess}
        totalHighlights={totalHighlights}
        auth={auth}
      />
      <Modal centered show={openLogout} onHide={logoutModal}>
        <Modal.Header className="card-crud h-0  "></Modal.Header>
        <Modal.Body className="card-crud ">
          ¿Estas seguro que quieres cerrar sesión?
        </Modal.Body>
        <Modal.Footer className="card-crud d-flex justify-content-center ">
          <Button
            className="btn-detail"
            onClick={() => {
              logoutModal();
            }}
          >
            No
          </Button>
          <Button
            className="btn-detail"
            onClick={() => {
              handleLogout();
              setOpenLogout(false);
              navigation("/");
            }}
          >
            Cerrar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
