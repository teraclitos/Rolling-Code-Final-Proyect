import { Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";

import { faUserSlash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function AdminTable({
  toastSuccess,
  toastError,
  auth,
  setIsLoading,
  isLoading,
  newLoad,
  setNewLoad,
  logout,
}) {
  const [dataUser, setDataUser] = useState([]);

  const [submitUser, setSubmitUser] = useState(null);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [idF, setId] = useState("");
  const [submit, setSubmit] = useState(null);
  const handleClose = () => setShow(false);
  const handleCloseDel = () => setOpen(false);
  const navigation = useNavigate();
  const [borderUser, setBorderUser] = useState("outline-input");
  const [borderName, setBorderName] = useState("outline-input");
  const [borderMail, setBorderMail] = useState("outline-input");
  useEffect(() => {
    if (validateName(editName) !== true) {
      setBorderName("outline-input wrong-border");
    } else {
      setBorderName("outline-input");
    }
  }, [editName]);
  useEffect(() => {
    if (validateUser(editUserName) !== true) {
      setBorderUser("outline-input wrong-border");
    } else {
      setBorderUser("outline-input");
    }
  }, [editUserName]);
  useEffect(() => {
    if (validateEmail(editEmail) !== true) {
      setBorderMail("outline-input wrong-border");
    } else {
      setBorderMail("outline-input");
    }
  }, [editEmail]);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.length < 9) {
      error = "Debe tener al menos 8 caracteres";
    } else if (value.length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim())
    ) {
      error = "Email incorrecto";
    } else {
      error = true;
    }
    return error;
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.trim().length < 3) {
      error = "Debe tener al menos 3 caracteres";
    } else if (value.trim().length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,30}$/i.test(value.trim())) {
      error = "Sólo puede llevar letras";
    } else {
      error = true;
    }
    return error;
  };
  const validateUser = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.trim().length < 3) {
      error = "Debe tener al menos 3 caracteres";
    } else if (value.trim().length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ]{1}$/i.test(value.trim().charAt(0))) {
      error = "El primer caracter debe ser una letra";
    } else if (
      !/^[a-zA-ZÀ-ÿ\s0-9-_]{2,30}$/i.test(
        value.trim().slice(1, value.trim().length)
      )
    ) {
      error = "Sólo guiones como símbolos";
    } else if (!/^[\S]{3,30}$/i.test(value.trim())) {
      error = "No debe llevar espacios ";
    } else {
      error = true;
    }
    return error;
  };

  const [ChangeDataUser, setChangeDataUser] = useState(1);

  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/users/verusuarios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          setDataUser(json);
        } else {
          logout();
          navigation("/");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [ChangeDataUser, newLoad]);

  const handleShow = () => setShow(true);

  const handleDel = (e, id) => {
    fetch("https://backend-news-eight.vercel.app/users/deleteuser/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((json) => setSubmitUser(true));
  };
  const handleOpen = () => setOpen(true);

  const handleSubmitUser = (e, id) => {
    if (
      validateEmail(editEmail) !== true ||
      validateName(editName) !== true ||
      validateUser(editUserName) !== true
    ) {
      return toastError("Debe completar correctamente todos los campos");
    }
    fetch(`https://backend-news-eight.vercel.app/users/edituser/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
      body: JSON.stringify({
        name: editName,
        username: editUserName,
        email: editEmail,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setSubmit(true);
      })
      .then(() => handleClose())
      .catch((error) => setSubmit(false));
  };

  useEffect(() => {
    if (submit === true) {
      setTimeout(() => {
        toastSuccess("Modificado");
      }, 100);

      setSubmit(null);
    } else if (submit === false) {
      toastError("Algo ha salido mal");
      setSubmit(null);
    }
  }, [submit]);

  useEffect(() => {
    if (submitUser === true) {
      setTimeout(() => {
        toastSuccess("Eliminado");
      }, 100);
      setSubmitUser(null);
    } else if (submitUser === false) {
      setTimeout(() => {
        toastSuccess("Ha ocurrido un error");
      }, 100);
      setSubmitUser(null);
    }
  }, [submitUser]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="body-recover">
          <Container fluid className="resposive-table ">
            <div className="d-flex flex-column">
              <div className="d-flex flex-column align-items-center">
                <h3 className="text-center pb-2 pt-3 title-table ">
                  ADMINISTRAR USUARIO
                </h3>

                <Table
                  striped
                  bordered
                  responsive
                  scrollX
                  hover
                  className="color-table  "
                >
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
                      <tr key={"user" + i}>
                        <td>{i + 1}</td>
                        <td>{dataUser._id}</td>

                        <td>{dataUser.username}</td>
                        <td>
                          {dataUser.role !== "admin" && (
                            <FontAwesomeIcon
                              className="btn-icon"
                              onClick={() => {
                                handleShow();
                                setEditName(dataUser.name);
                                setEditEmail(dataUser.email);
                                setEditUserName(dataUser.username);
                                setId(dataUser._id);
                              }}
                              style={{ fontSize: "2em" }}
                              icon={faPenToSquare}
                            />
                          )}
                          <Modal centered show={show} onHide={handleClose}>
                            <Modal.Header className="card-crud" closeButton>
                              <Modal.Title className="edit-label ">
                                Modificar Usuario
                              </Modal.Title>
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
                                    placeholder="Ingrese nuevo nombre"
                                    className={borderName}
                                    maxLength={31}
                                    type="text"
                                    value={editName}
                                    onChange={(e) =>
                                      setEditName(e.target.value)
                                    }
                                    autoFocus
                                  />
                                  {validateName(editName) && (
                                    <Form.Text className="wrong ">
                                      {validateName(editName)}
                                    </Form.Text>
                                  )}
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
                                    className={borderUser}
                                    placeholder="Ingrese nuevo user name"
                                    value={editUserName}
                                    onChange={(e) =>
                                      setEditUserName(e.target.value)
                                    }
                                    autoFocus
                                  />
                                  {validateUser(editUserName) && (
                                    <Form.Text className="wrong ">
                                      {validateUser(editUserName)}
                                    </Form.Text>
                                  )}
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
                                    onChange={(e) =>
                                      setEditEmail(e.target.value)
                                    }
                                    autoFocus
                                    className={borderMail}
                                  />
                                  {validateEmail(editEmail) && (
                                    <Form.Text className="wrong ">
                                      {validateEmail(editEmail)}
                                    </Form.Text>
                                  )}
                                </Form.Group>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer className="card-crud d-flex justify-content-center">
                              <Button
                                className="btn-detail"
                                onClick={handleClose}
                              >
                                Cerrar
                              </Button>
                              {/* <Button
                            className="btn-detail"
                            onClick={(e) => handleCerrar(e)}
                          >
                            Cerrar
                          </Button> */}
                              <Button
                                className="btn-detail"
                                onClick={(e) => {
                                  handleSubmitUser(e, idF);

                                  setTimeout(() => {
                                    setChangeDataUser(ChangeDataUser + 1);
                                  }, 1000);
                                }}
                              >
                                Guardar cambios
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                        <td>
                          {dataUser.role !== "admin" && (
                            <FontAwesomeIcon
                              className="btn-icon"
                              onClick={() => {
                                handleOpen();
                                setId(dataUser._id);
                              }}
                              style={{ fontSize: "2em" }}
                              icon={faUserSlash}
                            />
                          )}

                          <Modal centered show={open} onHide={handleCloseDel}>
                            <Modal.Header className="card-crud h-0 "></Modal.Header>
                            <Modal.Body className="card-crud ">
                              ¿Estas seguro que quieres eliminar este usuario?
                            </Modal.Body>
                            <Modal.Footer className="card-crud d-flex justify-content-center">
                              <Button
                                className="btn-detail"
                                onClick={() => {
                                  handleCloseDel();
                                }}
                              >
                                Cerrar
                              </Button>
                              <Button
                                className="btn-detail"
                                onClick={(e) => {
                                  handleDel(e, idF);
                                  setTimeout(() => {
                                    setChangeDataUser(ChangeDataUser + 1);
                                  }, 1000);
                                  handleCloseDel();
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
        </div>
      )}
    </>
  );
}

export default AdminTable;
