import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ModalRegister = ({ showRegister, setShowRegister }) => {
  const handleCloseRegister = () => setShowRegister(false);

  return (
    <Modal centered show={showRegister} onHide={handleCloseRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Regístrate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Francisco Terán" />

            {/* <Form.Text className="text-danger">
              Ingrese su nombre y apellido.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control type="text" placeholder="" />

            {/* <Form.Text className="text-danger">
              Ingrese su nombre y apellido.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="mail" placeholder="fran@gmail.com" />

            {/* <Form.Text className="text-danger">Ingrese su mail.</Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />

            {/* <Form.Text className="text-danger">
              Ingrese su contraseña.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los terminos y condiciones."
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Regístrate
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRegister;
