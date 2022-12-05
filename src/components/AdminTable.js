import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";

import { faUserSlash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AdminTable(toastSuccess, toastError) {
  const [dataUser, setDataUser] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [submit, setSubmit] = useState(null);
  const handleClose = () => setShow(false);
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/users/verusuarios")
      .then((res) => res.json())
      .then((json) => setDataUser(json));
  }, []);
  // const token = JSON.parse(localStorage.getItem("token"));

  const handleShow = () => setShow(true);
  const handleDel = () => {
    setOpen(false);
    // e.preventDefault();

    // fetch("" + data._id, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     token,
    //   },
    //   body: JSON.stringify({
    //     name: editName,
    //     username: editUserName,
    //     email: editEmail,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((json) => setOpen(false))
    //   .catch((error) => setSubmit(true));
  };
  const handleOpen = () => setOpen(true);
  const handleSubmit = (e) => {
    console.log("enviado");
    e.preventDefault();

    fetch(
      "https://backend-news-eight.vercel.app/users/verusuarios" + dataUser._id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // token,
        },
        body: JSON.stringify({
          name: editName,
          username: editUserName,
          email: editEmail,
          role: dataUser.role,
          token: dataUser.token,
          id: dataUser.id,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => setSubmit(true))
      .catch((error) => setSubmit(false));
  };

  useEffect(() => {
    setEditName(dataUser.name);
    setEditEmail(dataUser.email);
    setEditUserName(dataUser.username);
  }, [dataUser]);

  useEffect(() => {
    if (submit) {
      toastSuccess("Modificado");
    } else if (submit === false) {
      toastError("Algo ha salido mal");
    }
  }, [submit]);

  return (
    <body className="body-recover">
      <Container fluid className="resposive-table">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items-center">
            <h3 class="text-center pb-2 pt-3 title-table ">
              ADMINISTRAR USUARIO
            </h3>

            <Table striped bordered hover className="color-table">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Id</th>

                  <th>Usuario</th>
                  <th>Modificar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {dataUser.map((dataUser, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{dataUser._id}</td>

                    <td>{dataUser.username}</td>
                    <td>
                      <FontAwesomeIcon
                        className="btn-icon"
                        onClick={handleShow}
                        style={{ fontSize: "2em" }}
                        icon={faPenToSquare}
                      />

                      <Modal centered show={show} onHide={handleClose}>
                        <Modal.Header className="card-crud" closeButton>
                          <Modal.Title>Modificar Usuario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="card-crud">
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="edit-label">
                                Nombre
                              </Form.Label>
                              <Form.Control
                                maxLength={31}
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
                                Nombre de Usuario
                              </Form.Label>
                              <Form.Control
                                maxLength={31}
                                type="text"
                                placeholder="Ingrese nuevo user name"
                                value={editUserName}
                                onChange={(e) =>
                                  setEditUserName(e.target.value)
                                }
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
                                maxLength={31}
                                type="email"
                                placeholder="name@example.com"
                                value={editEmail}
                                onChange={(e) => setEditEmail(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer className="card-crud d-flex justify-content-center">
                          <Button className="btn-detail" onClick={handleClose}>
                            Cerrar
                          </Button>
                          <Button
                            className="btn-detail"
                            onClick={(e) => handleSubmit(e)}
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

                      <Modal centered show={open} onHide={handleDel}>
                        <Modal.Header className="card-crud h-0 "></Modal.Header>
                        <Modal.Body className="card-crud ">
                          ¿Estas seguro que quieres eliminar este usuario?
                        </Modal.Body>
                        <Modal.Footer className="card-crud d-flex justify-content-center">
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
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </body>
  );
}

export default AdminTable;
