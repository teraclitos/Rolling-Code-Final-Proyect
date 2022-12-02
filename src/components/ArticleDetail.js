import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AsideAdvertisement from "./AsideAdvertisement";

import {
  Button,
  Card,
  Container,
  Row,
  Modal,
  Form,
  Col,
  Pagination,
  Alert,
} from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Categorias from "./Categorias";
import "../styles/allcss.css";
import { Route, Routes, Link, useParams } from "react-router-dom";

const ArticleDetail = ({
  data,
  add,
  cart,
  auth,
  toastSuccess,
  toastError,
  totalHighlights,
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    console.log("enviado");

    setSubmitOk(null);
    fetch("https://backend-news-eight.vercel.app/news" + data._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: editSection,
        author: editAuthor,
        img_URL: editImage,
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
    setEditSection(data.category);
    setEditAuthor(data.author);
    setEditImage(data.img_URL);
    setEditTitle(data.description);
    setEditSubtitulo(data.description);
    setEditDescription(data.content);
  }, [data]);

  useEffect(() => {
    if (submitOk) {
      toastSuccess("Modificado!");
    } else if (submitOk === false) {
      toastError("Algo ha salido mal ...");
    }
  }, [submitOk]);

  const addHighlight = () => {
    if (!editHighlight) {
      setEditHighlight(true);
    } else {
      setEditHighlight(false);
    }
  };

  const highlightFilter = () => {
    if (totalHighlights.length > 2 && editHighlight === true) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Container fluid>
        <Row xs={1} md={2}>
          <div className="col-12 col-md-9">
            <Card border="0" className="mt-5">
              <Card.Header className="title-section">
                {data.category}
              </Card.Header>

              <Card.Body>
                <div className="detail-author">
                  <Card.Img variant="top" src={data.img_URL} width={50} />
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
              </Card.Body>
              <div className="col-12 card-highlights" />
            </Card>
          </div>
          {/* VISTA ADMIN */}
          <div className="col-12 col-md-3">
            {/* {auth.user === "admin" && ( */}
            <Button className=" btn-detail" onClick={handleShow}>
              EDITAR
            </Button>
            {/* )} */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="card-crud" closeButton>
                <Modal.Title className="title-crud">CRUD ARTICULOS</Modal.Title>
              </Modal.Header>
              <Modal.Body className="card-crud">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="style-crud">Categoria</Form.Label>
                    <Form.Control
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
                      <Form.Label className="style-crud">Subtitulo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese subtitulo"
                        defaultValue={editSubtitulo}
                        value={editSubtitulo}
                        onInput={(e) => setEditSubtitulo(e.target.value)}
                        autoFocus
                      />
                    </Form.Group>
                    {/* data.description */}
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

              <Modal.Footer className="card-crud">
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
                    className="btn-detail"
                    onClick={(e) => {
                      if (highlightFilter() === true) {
                        handleSubmit(e);
                      } else {
                        toastError("Sólo puede haber tres destacados");
                      }
                    }}
                  >
                    Guardar cambios
                  </Button>
                </Form.Group>
              </Modal.Footer>
            </Modal>

            <Button
              className="mt-5 mb-5"
              variant="warning"
              onClick={() => add(data)}
              disabled={cart.includes(data)}
            >
              Agregar a favoritos <FontAwesomeIcon icon={faHeart} />
            </Button>
            {/* <aside className="carousel-advertisement-container">
              <AsideAdvertisement />
            </aside> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleDetail;
