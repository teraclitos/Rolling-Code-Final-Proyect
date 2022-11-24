import React, { useState, useEffect } from "react";
import { ModalFooter, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../styles/navbar.css";
import "../styles/articlepublicitygrid.css";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const ModalLogin = ({ showLogin, setShowLogin, auth, validate, login }) => {
  const handleCloseLogin = () => setShowLogin(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(mail);
    console.log(password);
  }, [mail, password]);

  const navigate = useNavigate();

  const handleLogin = (u, p) => {
    if (validate(u, p)) {
      login(u);
      navigate("/");
    }
  };
  return (
    <div>
      <Modal centered show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header
          className="border-0 modal-titles modal-background"
          closeButton
        >
          <div></div>
          <Modal.Title className="text-center">Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-background ">
          <Form>
            <Form.Group
              className="mb-3 d-flex flex-column align-items-start"
              controlId="formBasicPassword"
            >
              <Form.Label>Email o usuario</Form.Label>
              <Form.Control
                type="mail"
                placeholder=""
                onInput={(e) => setMail(e.target.value)}
              />

              {/* <Form.Text className="text-danger">Ingrese su mail.</Form.Text> */}
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-column align-items-start"
              controlId="formBasicPassword"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                onInput={(e) => setPassword(e.target.value)}
              />

              {/* <Form.Text className="text-danger">
              Ingrese su contraseña.
            </Form.Text> */}
              <span className="mt-2">
                Si no recuerda su contraseña, ingrese{" "}
                <Link to="/home">aquí</Link>
              </span>
            </Form.Group>

            <Button
              className="mt-3 btn-color"
              type="submit"
              onClick={() => handleLogin(mail, password)}
            >
              Iniciar sesión
            </Button>
          </Form>
        </Modal.Body>
        <ModalFooter className="modal-background border-0"></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalLogin;
