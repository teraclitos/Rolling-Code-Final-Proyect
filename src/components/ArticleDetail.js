import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Card, Container, Row, Modal, Form } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/allcss.css";
import "../styles/scrollbaroffcanvas.css";

const ArticleDetail = ({
  data,
  add,
  del,
  cart,
  auth,
  toastSuccess,
  toastError,
  totalHighlights,
  dataTotal,
  changeData,
  setChangeData,
  setDeleteFavorite,
  setModifyFavorite,
  deleteFavorite,
  modifyFavorite,
  modifyFavoriteFetch,
}) => {
  const [show, setShow] = useState(false);
  const [editSection, setEditSection] = useState(data.category);
  const [editAuthor, setEditAuthor] = useState(data.author);
  const [editImage, setEditImage] = useState(data.img_URL);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editSubtitulo, setEditSubtitulo] = useState(data.description);
  const [editDescription, setEditDescription] = useState(data.content);
  const [editHighlight, setEditHighlight] = useState(data.highlight);
  const [submitOk, setSubmitOk] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [render, setRender] = useState(true);
  const [deleteOk, setDeletetOk] = useState(null);
  const handleClose = () => setShow(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleShow = () => setShow(true);

  const fields = [
    editAuthor,
    editDescription,
    editImage,
    editSection,
    editSubtitulo,
    editTitle,
  ];

  const checkAllFields = () => {
    const check = fields.map((element) => validateField(element));

    return check.filter((element) => element !== true);
  };

  const validateField = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.trim().length < 3) {
      error = "Debe tener al menos 3 caracteres";
    } else if (value === editImage) {
      const image = value.trim().split(".")[value.trim().split(".").length - 1];
      if (!(image === "png" || image === "jpg" || image === "jpeg")) {
        error = "La imagen debe ser formato png o jpg o jpeg";
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    return error;
  };

  const handleSubmit = (e) => {
    setSubmitOk(null);
    fetch("https://backend-news-eight.vercel.app/news/editnews/" + data._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
      body: JSON.stringify({
        category: editSection,
        author: editAuthor,
        img_URL: editImage,
        avatar_URL: data.avatar_URL,
        title: editTitle,
        description: editSubtitulo,
        content: editDescription,
        highlight: editHighlight,
        date: data.date,
      }),
    })
      .then((res) => res.json())
      .then((json) => setSubmitOk(true))
      .catch((error) => setSubmitOk(false));
  };

  useEffect(() => {
    setRender(true);
  }, [data, dataTotal]);

  useEffect(() => {
    if (submitOk) {
      toastSuccess("Modificado!");
    } else if (submitOk === false) {
      toastError("Algo ha salido mal ...");
    }
  }, [submitOk]);
  useEffect(() => {
    if (deleteOk) {
      toastSuccess("Eliminado");
    } else if (submitOk === false) {
      toastError("Algo ha salido mal ...");
    }
  }, [deleteOk]);

  const addHighlight = () => {
    if (!editHighlight) {
      setEditHighlight(true);
    } else {
      setEditHighlight(false);
    }
  };

  const highlightFilter = () => {
    if (
      totalHighlights.length > 2 &&
      data.highlight === false &&
      editHighlight !== data.highlight
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleDeleteOneArticle = () => {
    fetch("https://backend-news-eight.vercel.app/news/deletenews/" + data._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((json) => setDeletetOk(true))
      .catch((error) => setDeletetOk(false));
  };
  const navigation = useNavigate();
  const adding = (p) => {
    setModifyFavorite(true);
    add(p);
  };

  const deleting = (p) => {
    setDeleteFavorite(true);

    del(p);
  };
  useEffect(() => {
    if (modifyFavorite === true) {
      modifyFavoriteFetch();
      setModifyFavorite(null);
    }
  }, [cart]);
  useEffect(() => {
    if (deleteFavorite === true) {
      modifyFavoriteFetch();
      setDeleteFavorite(null);
    }
  }, [cart]);
  return (
    <div>
      {render === true && (
        <>
          <Container className="mb-5">
            <Row xs={1} md={2}>
              <div id="render-container" className="col-12 col-md-12">
                <Card border="0" className="mt-5">
                  <Card.Header className="title-section d-flex align-items-center justify-content-center">
                    {data.category}
                  </Card.Header>

                  <Card.Body>
                    <div className="detail-author">
                      <Card.Img
                        variant="top"
                        src={data.avatar_URL}
                        width={50}
                      />
                      <Card.Title className="mt-4">{data.author}</Card.Title>
                    </div>

                    <div className="col-12 linea-style" />

                    <div>
                      <div className="social-media">
                        <div className="red-social">
                          <FontAwesomeIcon
                            onClick={() => {
                              navigation("*");
                            }}
                            className="icon-fb"
                            style={{ fontSize: "3em" }}
                            icon={faFacebook}
                          />
                        </div>
                        <div className="red-social">
                          <FontAwesomeIcon
                            onClick={() => {
                              navigation("*");
                            }}
                            className="icon-ig"
                            icon={faInstagram}
                            style={{ fontSize: "3em" }}
                          />
                        </div>
                        <div className="red-social">
                          <FontAwesomeIcon
                            onClick={() => {
                              navigation("*");
                            }}
                            className="icon-tw"
                            style={{ fontSize: "3em" }}
                            icon={faTwitter}
                          />
                        </div>
                      </div>

                      <div className="col-12 linea-style" />
                    </div>
                    <Card.Title className="text-center title-detail fs-1 py-3">
                      {data.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card border="0">
                  <Card.Img src={data.img_URL} width={40} />
                  <Card.Body>
                    <Card.Title className="title-description fs-4 my-4">
                      {data.description}
                    </Card.Title>

                    <Card.Text className="content py-4 fs-6">
                      {data.content}
                    </Card.Text>

                    {auth.role === "admin" ? (
                      <div className="mt-4">
                        <Button
                          className="me-4 btn-detail "
                          onClick={handleShow}
                        >
                          EDITAR
                        </Button>
                        <Button
                          onClick={handleShowDelete}
                          className="btn-delete"
                        >
                          Eliminar
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className="mt-2 mb-2"
                        variant="warning"
                        onClick={() => {
                          cart.filter((element) => element._id === data._id)
                            .length !== 1
                            ? adding(data)
                            : deleting(data);
                        }}
                      >
                        {cart.filter((element) => element._id === data._id)
                          .length !== 1 ? (
                          <span> Agregar a favoritos</span>
                        ) : (
                          <span>Eliminar de favoritos</span>
                        )}
                        <FontAwesomeIcon
                          className={
                            cart.filter((element) => element._id === data._id)
                              .length !== 1
                              ? "ms-1 align-self-center fs-5 icon-heart "
                              : "ms-1 align-self-center fs-5 icon-heart heart-favorite"
                          }
                          icon={faHeart}
                        />
                      </Button>
                    )}
                  </Card.Body>

                  <div className="col-12 card-highlights" />
                </Card>
              </div>
            </Row>
          </Container>

          <Modal fullscreen={true} show={show} onHide={handleClose}>
            <Modal.Header className="card-crud" closeButton>
              <Modal.Title className="title-crud">Editar Noticia</Modal.Title>
            </Modal.Header>
            <Modal.Body className="card-crud modal-crud">
              <Form>
                <Form.Group
                  className="mb-3 group-container-crud"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="style-crud">Categoria</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setEditSection(e.target.value)}
                  >
                    <option value={editSection}>{editSection}</option>
                    {editSection !== "Mundial" && (
                      <option value="Mundial">Mundial</option>
                    )}
                    {editSection !== "Liga Argentina" && (
                      <option value="Liga Argentina">Liga Argentina</option>
                    )}
                    {editSection !== "Tenis" && (
                      <option value="Tenis">Tenis</option>
                    )}
                    {editSection !== "Basquet" && (
                      <option value="Basquet">Basquet</option>
                    )}
                  </Form.Select>

                  <Form.Group />

                  <Form.Group
                    className="mb-3 group-container-crud"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="style-crud">Autor</Form.Label>
                    <Form.Control
                      maxLength={31}
                      type="text"
                      placeholder="Nombre del autor"
                      value={editAuthor}
                      onInput={(e) => setEditAuthor(e.target.value)}
                      className={
                        validateField(editAuthor) !== true
                          ? "outline-input wrong-border"
                          : "outline-input "
                      }
                      autoFocus
                    />
                    <Form.Text className="wrong text-start ps-3 ">
                      {validateField(editAuthor)}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 group-container-crud"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="style-crud">Titulo</Form.Label>
                    <Form.Control
                      maxLength={31}
                      type="text"
                      defaultValue={editTitle}
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className={
                        validateField(editTitle) !== true
                          ? "outline-input wrong-border"
                          : "outline-input "
                      }
                    />
                    <Form.Text className="wrong text-start ps-3 ">
                      {validateField(editTitle)}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3 group-container-crud">
                    <Form.Label className="style-crud">URL</Form.Label>
                    <Form.Control
                      maxLength={200}
                      type="text"
                      placeholder="Ingrese URL de imagen"
                      defaultValue={editImage}
                      value={editImage}
                      onChange={(e) => setEditImage(e.target.value)}
                      className={
                        validateField(editImage) !== true
                          ? "outline-input wrong-border"
                          : "outline-input "
                      }
                    />
                    <Form.Text className="wrong text-start ps-3 ">
                      {validateField(editImage)}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 group-container-crud"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="style-crud">Subtitulo</Form.Label>
                    <Form.Control
                      maxLength={200}
                      type="text"
                      placeholder="Ingrese subtitulo"
                      defaultValue={editSubtitulo}
                      value={editSubtitulo}
                      onInput={(e) => setEditSubtitulo(e.target.value)}
                      className={
                        validateField(editSubtitulo) !== true
                          ? "outline-input wrong-border"
                          : "outline-input "
                      }
                    />
                    <Form.Text className="wrong text-start ps-3 ">
                      {validateField(editSubtitulo)}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 group-container-crud"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="style-crud">Descripcion</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      placeholder=""
                      defaultValue={editDescription}
                      value={editDescription}
                      onInput={(e) => setEditDescription(e.target.value)}
                      className={
                        validateField(editDescription) !== true
                          ? "outline-input wrong-border text-area-description-input"
                          : "outline-input text-area-description-input"
                      }
                    />
                    <Form.Text className="wrong text-start ps-3 ">
                      {validateField(editDescription)}
                    </Form.Text>
                  </Form.Group>
                </Form.Group>
              </Form>

              <Modal.Footer className="card-crud card-crud-footer d-flex  justify-content-center">
                <Button className="btn-detail" onClick={handleClose}>
                  Cerrar
                </Button>
                <Form.Group className=" btn-detail ">
                  <Form.Check
                    type="checkbox"
                    label="Destacar"
                    onClick={() => {
                      addHighlight();
                    }}
                    checked={editHighlight}
                  />
                </Form.Group>
                <Form.Group className="">
                  <Button
                    id="edit-Buttom"
                    className="btn-detail"
                    onClick={(e) => {
                      if (checkAllFields().length > 0) {
                        toastError(
                          "Debe completar correctamente todos los campos obligatorios"
                        );
                      } else {
                        if (highlightFilter() === true) {
                          handleSubmit(e);

                          setTimeout(() => {
                            setChangeData(changeData + 1);
                          }, 1000);

                          handleClose();
                        } else {
                          toastError("Sólo puede haber tres destacados");
                        }

                        setRender(true);
                      }
                    }}
                  >
                    Guardar Cambios
                  </Button>
                </Form.Group>
              </Modal.Footer>
            </Modal.Body>
          </Modal>

          <Modal
            className="text-dark"
            centered
            show={showDelete}
            onHide={handleCloseDelete}
          >
            <Modal.Header className="card-crud" closeButton>
              <Modal.Title className="title-crud">
                ¿Estás Seguro de que quiere eliminar este artículo?
              </Modal.Title>
            </Modal.Header>
            <Modal.Footer className="card-crud border-0 d-flex justify-content-center">
              <Button
                className="btn-detail btn-close-delete"
                onClick={handleCloseDelete}
              >
                NO
              </Button>
              <Button
                className="btn-delete btn-delete-yes"
                onClick={() => {
                  handleDeleteOneArticle();
                  handleCloseDelete();
                  setTimeout(() => {
                    setChangeData(changeData + 1);
                  }, 1000);
                  setTimeout(() => {
                    navigation("/");
                  }, 1500);
                }}
              >
                SÍ
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;
