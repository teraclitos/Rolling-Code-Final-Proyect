import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faUserSlash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AdminTable() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDel = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
                  <td>1</td>
                  <td>Mark</td>
                  <td>
                    <FontAwesomeIcon
                      className="btn-icon"
                      onClick={handleShow}
                      style={{ fontSize: "2em" }}
                      icon={faPenToSquare}
                    />

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header className="card-crud" closeButton>
                        <Modal.Title>Modificar User</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="card-crud">
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="edit-label">Name</Form.Label>
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
                            <Form.Label className="edit-label">
                              Username
                            </Form.Label>
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
                            <Form.Label className="edit-label">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              autoFocus
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer className="card-crud">
                        <Button className="btn-detail" onClick={handleClose}>
                          Cerrar
                        </Button>
                        <Button className="btn-detail" onClick={handleClose}>
                          Guardar cambios
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      className="btn-icon"
                      onClick={handleOpen}
                      style={{ fontSize: "2em" }}
                      icon={faUserSlash}
                    />

                    <Modal show={open} onHide={handleDel}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleDel}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleDel}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
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
