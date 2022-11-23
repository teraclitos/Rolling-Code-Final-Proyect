import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ModalLogin = ({ showLogin, setShowLogin }) => {
  const handleCloseLogin = () => setShowLogin(false);
  return (
    <div>
      <Modal centered show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
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

            <Button variant="success" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalLogin;
