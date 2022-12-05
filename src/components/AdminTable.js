import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";

import { faUserSlash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams, useRouteLoaderData } from "react-router-dom";

function AdminTable(toastSuccess, toastError) {
  const [dataUser, setDataUser] = useState([]);

  const [renderUser, setRenderUser] = useState(true);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [submit, setSubmit] = useState(null);
  const handleClose = () => setShow(false);
  const params = useParams();

  const [ChangeDataUser, setChangeDataUser] = useState(1);
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/users/verusuarios")
      .then((res) => res.json())
      .then((json) => setDataUser(json));
  }, [ChangeDataUser]);

  const handleShow = () => setShow(true);
  const token = JSON.parse(localStorage.getItem("token"));

  const handleDel = (e, id) => {
    e.preventDefault();
    console.log(token);
    fetch("https://backend-news-eight.vercel.app/users/deleteuser/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        name: editName,
        username: editUserName,
        email: editEmail,
      }),
    })
      .then((res) => res.json())
      .then((json) => setOpen(false))
      .catch((error) => setSubmit(true));
  };
  const handleOpen = () => setOpen(true);

  const handleSubmit = (e, id) => {
    console.log("enviado");
    e.preventDefault();

    fetch(`https://backend-news-eight.vercel.app/users/edituser/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        name: editName,
        username: editUserName,
        email: editEmail,
        role: dataUser.role,
        token: dataUser.token,
        id: dataUser._id,
      }),
    })
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
                        disabled={dataUser.role === "admin"}
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
                            onClick={(e) => handleSubmit(e, dataUser._id)}
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
                        disabled={dataUser.role === "admin"}
                      />

                      <Modal centered show={open} onHide={handleDel}>
                        <Modal.Header className="card-crud h-0 "></Modal.Header>
                        <Modal.Body className="card-crud ">
                          ¿Estas seguro que quieres eliminar este usuario?
                        </Modal.Body>
                        <Modal.Footer className="card-crud d-flex justify-content-center">
                          <Button
                            className="btn-detail"
                            onClick={() => handleClose()}
                          >
                            Cancelar
                          </Button>
                          <Button
                            className="btn-detail"
                            onClick={(e) => {
                              handleDel(e, dataUser._id);
                              setTimeout(() => {
                                setChangeDataUser(ChangeDataUser + 1);
                              }, 1000);
                              handleClose();
                            }}
                          >
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
