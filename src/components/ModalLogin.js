import React from "react";
import { ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../styles/navbar.css";
import "../styles/articlepublicitygrid.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const ModalLogin = ({
  showLogin,
  setShowLogin,
  auth,
  validate,
  login,
  logout,
}) => {
  const handleCloseLogin = () => setShowLogin(false);
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
              <Form.Control type="mail" placeholder="" />

              {/* <Form.Text className="text-danger">Ingrese su mail.</Form.Text> */}
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-column align-items-start"
              controlId="formBasicPassword"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />

              {/* <Form.Text className="text-danger">
              Ingrese su contraseña.
            </Form.Text> */}
            </Form.Group>

            <Button className="mt-3 btn-color" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Modal.Body>
        <ModalFooter className="modal-background border-0">
          <span>
            Si no recuerda su contraseña, ingrese <Link>aquí</Link>
          </span>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalLogin;
