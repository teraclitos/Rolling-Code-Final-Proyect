import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEnvelope,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AdminTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <body className="body-contacto">
      <Container fluid className="resposive-table">
        <div class="d-flex flex-column">
          <div class="d-flex flex-column align-items-center">
            <h3 class="text-center py-2 titulo-admin">ADMINISTRAR USUARIO</h3>
            <Table striped bordered hover className="color-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Usuario</th>
                  <th>Modificar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={handleShow}
                      style={{ fontSize: "2em", color: "#1986a0" }}
                      icon={faPenToSquare}
                    />

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modificar User</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ingresa un nuevo nombre"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ingresa un nuevo username"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              autoFocus
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Guardar cambios
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </body>
  );
}

export default AdminTable;
