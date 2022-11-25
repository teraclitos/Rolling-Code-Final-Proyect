import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import "../styles/articledetail.css";
import { Route, Routes, Link, useParams } from "react-router-dom";

const ArticleDetail = ({ data, add, cart }) => {
  const [show, setShow] = useState(false);
  const [editSection, setEditSection] = useState(data.section);
  const [editAuthor, setEditAuthor] = useState(data.author);
  const [editImage, setEditImage] = useState(data.image);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editSubtitulo, setEditSubtitulo] = useState(data.subtitulo);
  const [editDescription, setEditDescription] = useState(data.description);
  const [submitOk, setSubmitOk] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    // e.preventDefault();
    // setSubmitOk(null);
    // fetch("https://rcs-3i-api-node.vercel.app/products/update/" + product._id, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     category: product.category,
    //     description: editDescription,
    //     image:
    //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //     price: editPrice,
    //     title: editName,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((json) => setSubmitOk(true))
    //   .catch((error) => setSubmitOk(false));
  };
  return (
    <div>
      <Container fluid>
        <Row xs={1} md={2}>
          <div className="col-12 col-md-9">
            <Card border="0" className="mt-5">
              <Card.Header className="title-section">MUNDIAL</Card.Header>
              {/* data.section */}
              <Card.Body>
                <div className="detail-author">
                  <Card.Img variant="top" src="./logoRollingneta" width={70} />
                  <Card.Title className="mt-4">Marina Bianconi</Card.Title>
                </div>
                {/* data.author */}
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
                {/* data.title */}
              </Card.Body>
            </Card>
            <Card border="0">
              <Card.Img src={data.image} />
              <Card.Body>
                <Card.Title>{data.description}</Card.Title>
                {/* data.subtitulo */}
                <Card.Text>
                  Vincic, quien a los 42 años debutará en una Copa del Mundo, es
                  árbitro FIFA desde 2010 y dirigió en el Sub 17 de 2017 y en el
                  Sub 20 de 2019. Viene de ser el juez principal de la final de
                  la última Europa League, ganada por el Eintracht Frankfurt de
                  Alemania. Sin embargo, parece ser que hay una historia que
                  despertó la curiosidad de los seguidores del fútbol en
                  distintas partes del mundo y es que el encargado de impartir
                  justicia estuvo detenido tras encontrarse en el lugar
                  incorrecto en el momento incorrecto.
                </Card.Text>
                {/* data.description */}
              </Card.Body>
            </Card>
          </div>
          {/* VISTA ADMIN */}
          <div className="col-12 col-md-3">
            {/* {auth.role === "admin" && ( */}
            <Button className=" btn-detail" onClick={handleShow}>
              EDITAR
            </Button>
            {/* )}  cierro parentesis de admin boton*/}
            {/* {auth.role === "admin" ? ( */}
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
                    {/* data.section */}

                    <Form.Label className="style-crud">Seccion</Form.Label>
                    <Form.Control
                      type="text"
                      // value={section}
                      defaultValue={editSection}
                      onChange={(e) => setEditSection(e.target.value)}
                      autoFocus
                    />
                    <Form.Group />
                    {/* data.author */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="style-crud">Autor</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre del autor"
                        defaultValue={editAuthor}
                        value={editAuthor}
                        onChange={(e) => setEditAuthor(e.target.value)}
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
                        placeholder="Ingrese titulo del articulo"
                        defaultValue={editTitle}
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        autoFocus
                      />
                    </Form.Group>
                    {/* data.image */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="style-crud">URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese URL de imagen"
                        defaultValue={setEditImage}
                        value={editImage}
                        onChange={(e) => setEditImage(e.target.value)}
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
                        onChange={(e) => setEditSubtitulo(e.target.value)}
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
                        onChange={(e) => setEditDescription(e.target.value)}
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 mt-5 btn-detail"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="Destacar" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 mt-5"
                      controlId="formBasicCheckbox"
                    >
                      <Button
                        className="mb-5 mr-5 btn-save"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Guardar cambios
                      </Button>
                    </Form.Group>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="card-crud">
                <Button className="btn-save" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ) parentesis que cierra vista admin */}
            {/* aca reemplazar por el contador de favoritos de andre */}
            <Button
              className="mt-5 mb-5"
              variant="warning"
              onClick={() => add(data)}
              disabled={cart.includes(data)}
            >
              Agregar a favoritos <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Categorias />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleDetail;
