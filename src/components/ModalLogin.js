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
  login,
  showRegister,
  setShowRegister,
  handleShowRegister,
  toastError,
  toastSuccess,
}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginOk, setLoginOk] = useState(null);
  const [borderUser, setBorderUser] = useState("outline-input");
  const [firstValidationUser, setFirstValidationUser] = useState(false);
  const [firstValidationPassword, setFirstValidationPassword] = useState(false);
  const [borderPassword, setBorderPassword] = useState("outline-input");

  const validateUserLogin = (value) => {
    if (value.trim() === "") {
      return "Campo vacío";
    } else {
      return "";
    }
  };
  const validateUserPassword = (value) => {
    if (value.trim() === "") {
      return "Campo vacío";
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (!password && firstValidationPassword) {
      setBorderPassword("outline-input wrong-border");
    } else {
      setBorderPassword("outline-input");
    }
  }, [firstValidationPassword, password]);

  useEffect(() => {
    if (!user && firstValidationUser) {
      setBorderUser("outline-input wrong-border");
    } else {
      setBorderUser("outline-input");
    }
  }, [user, firstValidationUser]);

  const handleCloseLogin = async () => {
    setShowLogin(false);
    setUser("");
    setPassword("");
    setBorderPassword("outline-input");
    setBorderUser("outline-input");
    setFirstValidationPassword(false);
    setFirstValidationUser(false);
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoginOk({ name: null, role: null });
    fetch("https://backend-news-eight.vercel.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token", JSON.stringify(json.token));
          setLoginOk(true);
        } else {
          setLoginOk(false);
        }
      })

      .catch((error) => setLoginOk(false));
  };
  useEffect(() => {
    if (loginOk === true) {
      // login(user, loginOk.role);
      navigate("/");
      handleCloseLogin();
      toastSuccess(":hola: Bienvenido! Sesión iniciada correctamente");
      setLoginOk(null);
    } else if (loginOk === false) {
      // handleCloseLogin();
      toastError("Usuario o contraseña incorrectos");
      setLoginOk(null);
    }
  }, [loginOk]);
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
              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "1em",
                      color: "#FD841F",
                    }}
                    icon={faUser}
                  />
                </InputGroup.Text>
                <Form.Control
                  className={borderUser}
                  maxLength={31}
                  type="text"
                  placeholder="usuario"
                  onInput={(e) => setUser(e.target.value)}
                  onBlur={() => {
                    setFirstValidationUser(true);
                  }}
                />
              </InputGroup>
              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                {firstValidationUser && (
                  <Form.Text className="wrong ">
                    {validateUserLogin(user)}
                  </Form.Text>
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId="passwordLogin"
            >
              <Form.Label></Form.Label>
              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "1em",
                      color: "#FD841F",
                    }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                <Form.Control
                  className={borderPassword}
                  maxLength={31}
                  type="password"
                  onInput={(e) => setPassword(e.target.value)}
                  onBlur={() => {
                    setFirstValidationPassword(true);
                  }}
                  placeholder="Contraseña"
                />
              </InputGroup>
              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                {firstValidationPassword && (
                  <Form.Text className="wrong ">
                    {validateUserPassword(password)}
                  </Form.Text>
                )}
              </div>

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
                if (!user || !password) {
                  toastError("Debe completar todos los campos obligatorios");
                  setFirstValidationPassword(true);
                  setFirstValidationUser(true);
                } else {
                  handleLogin(user, password);
                }
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
