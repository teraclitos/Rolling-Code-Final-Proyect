import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AsideAdvertisement from "./AsideAdvertisement";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  Card,
  Container,
  Row,
  Modal,
  Form,
  Col,
  Pagination,
} from "react-bootstrap";
import {
  faCommentAlt,
  faHashtag,
  faHeart,
  faHeartCircleBolt,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import Categorias from "./Categorias";
import "../styles/allcss.css";
import { Route, Routes, Link, useParams } from "react-router-dom";

const ArticleDetail = ({ data, add, cart, auth }) => {
  const [show, setShow] = useState(false);
  const [editSection, setEditSection] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitulo, setEditSubtitulo] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [submitOk, setSubmitOk] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    fetch("https://fakestoreapi.com/products/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        editSection,
        editAuthor,
        editImage,
        editTitle,
        editSubtitulo,
        editDescription,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("responseFakeStore", response);
      });
  };

  useEffect(() => {
    setEditTitle(data.title);
    setEditSection(data.section);
    setEditDescription(data.description);
    setEditImage(data.image);
    setEditAuthor(data.author);
    setEditSubtitulo(data.subtitulo);
  }, [data]);

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
                  <Card.Img variant="top" src="./logoRollingneta" width={70} />
                  <Card.Title className="mt-4">{data.author}</Card.Title>
                </div>

                <div className="col-12 linea-style" />

                <Card.Text>
                  <div className="social-media">
                    <div className="red-social">
                      <FontAwesomeIcon
                        style={{ fontSize: "2em", color: "#1986a0" }}
                        icon={faHeartCircleBolt}
                      />
                    </div>
                    <div className="red-social">
                      <FontAwesomeIcon
                        icon={faCommentAlt}
                        style={{ fontSize: "2em", color: "#1986a0" }}
                      />
                    </div>
                    <div className="red-social">
                      <FontAwesomeIcon
                        style={{ fontSize: "2em", color: "#1986a0" }}
                        icon={faSeedling}
                      />
                    </div>
                  </div>
                  <div className="col-12 linea-style" />
                </Card.Text>
                <Card.Title className="text-center">{data.title}</Card.Title>
              </Card.Body>
            </Card>
            <Card border="0">
              <Card.Img src={data.img_URL} />
              <Card.Body>
                <Card.Title>{data.description}</Card.Title>

                <Card.Text>{data.content}</Card.Text>
              </Card.Body>
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
                    {/* data.category */}

                    <Form.Label className="style-crud">
                      {data.category}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={editSection}
                      defaultValue={editSection}
                      onInput={(e) => setEditSection(e.target.value)}
                      autoFocus
                    />
                    <Form.Group />
                    {/* data.author */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="style-crud">
                        {data.author}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre del autor"
                        defaultValue={editAuthor}
                        value={editAuthor}
                        onInput={(e) => setEditAuthor(e.target.value)}
                        autoFocus
                      />
                    </Form.Group>
                    {/* data.title */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="style-crud">Titulo</Form.Label>
                      <Form.Control
                        type="text"
                        // placeholder={data.title}
                        defaultValue={editTitle}
                        value={editTitle}
                        onInput={(e) => setEditTitle(e.target.value)}
                        autoFocus
                      />
                    </Form.Group>
                    {/* data.image */}
                    <Form.Group className="mb-3">
                      <Form.Label className="style-crud">URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese URL de imagen"
                        defaultValue={setEditImage}
                        value={editImage}
                        onInput={(e) => setEditImage(e.target.value)}
                        autoFocus
                      />
                    </Form.Group>
                    {/* data.subtitulo */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="style-crud">Subtitulo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese subtitulo"
                        defaultValue={setEditSubtitulo}
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
                        defaultValue={setEditDescription}
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
                    onClick={() => add(data)}
                  />
                </Form.Group>
                <Form.Group className="">
                  <Button
                    className="btn-detail"
                    onClick={(e) => handleSubmit(e)}
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
            <aside className="carousel-advertisement-container">
              <AsideAdvertisement />
            </aside>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleDetail;
