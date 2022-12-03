import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";

import { faUserSlash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AdminTable(data, toastSuccess, toastError) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [submit, setSubmit] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDel = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  // const handleSubmit = (e) => {
  //   console.log("enviado");
  //   e.preventDefault();

  //   fetch("" + data._id, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       Name: editName,
  //       Username: editUserName,
  //       Mail: editEmail,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setSubmit(true))
  //     .catch((error) => setSubmit(false));
  // };

  // useEffect(() => {
  //   setEditName(data.name);
  //   setEditEmail(data.email);
  //   setEditUserName(data.name);
  // }, [data]);

  // useEffect(() => {
  //   if (submit) {
  //     toastSuccess("Modificado!");
  //   } else if (submit === false) {
  //     toastError("Algo ha salido mal ...");
  //   }
  // }, [submit]);

  return (
    <body className="body-contacto">
      <Container fluid className="resposive-table">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items-center">
            <h3 class="text-center py-2 title-table">ADMINISTRAR USUARIO</h3>
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
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
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
                              placeholder="Ingrese nuevo user name"
                              value={editUserName}
                              onChange={(e) => setEditUserName(e.target.value)}
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
                              value={editEmail}
                              onChange={(e) => setEditEmail(e.target.value)}
                              autoFocus
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer className="card-crud">
                        <Button className="btn-detail" onClick={handleClose}>
                          Cerrar
                        </Button>
                        <Button
                          className="btn-detail"
                          // onClick={(e) => handleSubmit(e)}
                        >
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
                      <Modal.Body className="card-crud">
                        ¿Estas seguro que quieres eliminar este usuario?
                      </Modal.Body>
                      <Modal.Footer className="card-crud">
                        <Button className="btn-detail" onClick={handleDel}>
                          Cancelar
                        </Button>
                        <Button className="btn-detail" onClick={handleDel}>
                          Eliminar
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
