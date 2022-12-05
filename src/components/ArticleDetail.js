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

const ArticleDetail = ({
  data,
  add,
  cart,
  auth,
  toastSuccess,
  toastError,
  totalHighlights,
  dataTotal,
  changeData,
  setChangeData,
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
  const handleSubmit = (e) => {
    setSubmitOk(null);
    fetch("https://backend-news-eight.vercel.app/news/editnews/" + data._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
      toastSuccess("Elimindado");
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
      },
    })
      .then((res) => res.json())
      .then((json) => setDeletetOk(true))
      .catch((error) => setDeletetOk(false));
  };


  return (
    <div>
      {render === true && (
        <Container className="mb-5">
          <Row xs={1} md={2}>
            <div id="render-container" className="col-12 col-md-12">
              <Card border="0" className="mt-5">
                <Card.Header className="title-section d-flex align-items-center justify-content-center">
                  {data.category}
                </Card.Header>

                <Card.Body>
                  <div className="detail-author">
                    <Card.Img variant="top" src={data.avatar_URL} width={50} />
                    <Card.Title className="mt-4">{data.author}</Card.Title>
                  </div>

                  <div className="col-12 linea-style" />

                  <Card.Text>
                    <div className="social-media">
                      <div className="red-social">
                        <FontAwesomeIcon
                          className="icon-fb"
                          style={{ fontSize: "3em" }}
                          icon={faFacebook}
                        />
                      </div>
                      <div className="red-social">
                        <FontAwesomeIcon
                          className="icon-ig"
                          icon={faInstagram}
                          style={{ fontSize: "3em" }}
                        />
                      </div>
                      <div className="red-social">
                        <FontAwesomeIcon
                          className="icon-tw"
                          style={{ fontSize: "3em" }}
                          icon={faTwitter}
                        />
                      </div>
                      <div className="red-social">
                        {/* <h5 className="mt-4">{data.date}</h5> */}
                      </div>
                    </div>

                    <div className="col-12 linea-style" />
                  </Card.Text>
                  <Card.Title className="text-center title-detail">
                    {data.title}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card border="0">
                <Card.Img src={data.img_URL} width={40} />
                <Card.Body>
                  <Card.Title className="title-description">
                    {data.description}{" "}
                  </Card.Title>

                  <Card.Text className="content">{data.content}</Card.Text>

                  {auth.role === "admin" ? (
                    <div className="mt-4">
                      <Button className="me-4 btn-detail " onClick={handleShow}>
                        EDITAR
                      </Button>
                      <Button onClick={handleShowDelete} className="btn-delete">
                        Eliminar
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="mt-2 mb-2"
                      variant="warning"
                      onClick={() => add(data)}
                      disabled={cart.includes(data)}
                    >
                      Agregar a favoritos <FontAwesomeIcon icon={faHeart} />
                    </Button>
                  )}
                </Card.Body>

                <div className="col-12 card-highlights" />
              </Card>
            </div>

            <div className="col-12 col-md-3">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="card-crud" closeButton>
                  <Modal.Title className="title-crud">
                    CRUD ARTICULOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="card-crud">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="style-crud">Categoria</Form.Label>
                      <Form.Control
                        maxLength={31}
                        type="text"
                        value={editSection}
                        onChange={(e) => setEditSection(e.target.value)}
                        autoFocus
                      />
                      <Form.Group />

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="style-crud">Autor</Form.Label>
                        <Form.Control
                          maxLength={31}
                          type="text"
                          placeholder="Nombre del autor"
                          value={editAuthor}
                          onInput={(e) => setEditAuthor(e.target.value)}
                          autoFocus
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="style-crud">Titulo</Form.Label>
                        <Form.Control
                          maxLength={31}
                          type="text"
                          defaultValue={editTitle}
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          autoFocus
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="style-crud">URL</Form.Label>
                        <Form.Control
                          maxLength={31}
                          type="text"
                          placeholder="Ingrese URL de imagen"
                          defaultValue={editImage}
                          value={editImage}
                          onChange={(e) => setEditImage(e.target.value)}
                          autoFocus
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="style-crud">
                          Subtitulo
                        </Form.Label>
                        <Form.Control
                          maxLength={31}
                          type="text"
                          placeholder="Ingrese subtitulo"
                          defaultValue={editSubtitulo}
                          value={editSubtitulo}
                          onInput={(e) => setEditSubtitulo(e.target.value)}
                          autoFocus
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="style-crud">
                          Descripcion
                        </Form.Label>
                        <Form.Control
                          type="textarea"
                          placeholder=""
                          defaultValue={editDescription}
                          value={editDescription}
                          onInput={(e) => setEditDescription(e.target.value)}
                          autoFocus
                        />
                      </Form.Group>
                    </Form.Group>
                  </Form>
                </Modal.Body>

                <Modal.Footer className="card-crud d-flex justify-content-center">
                  <Button className="btn-detail" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Form.Group className=" btn-detail">
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
                      }}
                    >
                      Guardar cambios
                    </Button>
                  </Form.Group>
                </Modal.Footer>
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
                    className="btn-delete"
                    onClick={() => {
                      handleDeleteOneArticle();
                      handleCloseDelete();
                      setTimeout(() => {
                        setChangeData(changeData + 1);
                        navigate("/");
                      }, 1000);
                    }}
                  >
                    SÍ
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* <aside className="carousel-advertisement-container">
              <AsideAdvertisement />
            </aside> */}
            </div>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ArticleDetail;
