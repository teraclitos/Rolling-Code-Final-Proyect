import React, { useState, useEffect } from "react";
import { ModalFooter, Toast, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../styles/allcss.css";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBorderStyle,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ModalLogin = ({
  showLogin,
  setShowLogin,
  auth,
  validate,
  login,
  showRegister,
  setShowRegister,
  handleShowRegister,
  toastError,
  toastSuccess,
}) => {
  // const handleCloseLogin = () => setShowLogin(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loginOk, setLoginOk] = useState("");
  const handleCloseLogin = async () => {
    setShowLogin(false);
  };

  useEffect(() => {
    console.log("username" + mail);
    console.log("password" + password);
  }, [mail, password]);

  const navigate = useNavigate();
  // const handleLogin = (u, p) => {
  //   if (validate(u, p)) {
  //     login(u);
  //     navigate("/");
  //     console.log("login correcto" + auth.user);
  //   } else {
  //     console.log("login incorrecto" + auth.user);
  //   }
  const handleLogin = (u, p) => {
    const result = validate(u, p);
    console.log(result.role);
    if (!result.error) {
      login(u, result.role);
      navigate("/");
      handleCloseLogin();
      toastSuccess("👋 Bienvenido! Sesión iniciada correctamente");
    } else {
      console.log("login incorrecto");
      toastError("no se pudo iniciar sesion");
    }
  };
  return (
    <div>
      <Modal centered show={showLogin} onHide={handleCloseLogin}>
        <Modal.Body className="modal-background ">
          <Modal.Header
            className="border-0 modal-titles modal-background"
            closeButton
          >
            <div></div>
            <Modal.Title className="text-center text-login fs-2">
              Iniciar sesión
            </Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId="mailUserLogin"
            >
              <Form.Label></Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faUser}
                  />
                </InputGroup.Text>
                <Form.Control
                  type="mail"
                  placeholder="Mail o usuario"
                  onInput={(e) => setMail(e.target.value)}
                />
              </InputGroup>

              {/* <Form.Text className="text-danger">Ingrese su mail.</Form.Text> */}
            </Form.Group>
            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId="passwordLogin"
            >
              <Form.Label></Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  onInput={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                />
              </InputGroup>
              {/* <Form.Text className="text-danger">
              Ingrese su contraseña.
            </Form.Text> */}
              <div className="d-flex justify-content-center w-100">
                <span className="mt-2">
                  Si no recuerda su contraseña, ingrese
                  <Link
                    className="ms-2"
                    onClick={() => handleCloseLogin()}
                    to="/recuperarContraseña"
                  >
                    aquí
                  </Link>
                </span>
              </div>
              <div className="d-flex justify-content-center w-100">
                <span className="mt-2">
                  Aún no estás registrado, pues qué esperas
                  <Link
                    className="ms-2"
                    onClick={() => {
                      handleCloseLogin();
                      handleShowRegister();
                    }}
                  >
                    regístrate
                  </Link>
                </span>
              </div>
            </Form.Group>

            <Button
              className="mt-3 btn-color fs-5"
              onClick={() => {
                handleLogin(mail, password);
              }}
            >
              Iniciar sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalLogin;
