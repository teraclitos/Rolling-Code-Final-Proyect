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

const Highlights = ({ data, add }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [image, setimage] = useState("");
  const [sybtitulo, setSubtitulo] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [edition, setEdition] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdition = () => {
    setEdition(!edition);
  };

  return (
    <div>
      <Container fluid>
        <h2 className="title-news text-center">Noticias de la Semana</h2>
        <Row xs={1} md={2}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <div className="col-12 col-md-12">
              <Card border="0" className="mt-5">
                <Card.Header className="title-section">MUNDIAL</Card.Header>
                {/* data.section */}
                <Card.Body>
                  <div className="detail-author">
                    <Card.Img
                      variant="top"
                      src="./logoRollingneta"
                      width={70}
                    />
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
                  <Card.Title className="text-center"> titulo</Card.Title>
                  {/* data.title */}
                </Card.Body>
              </Card>
              <Card border="0" style={{ width: "18rem" }}>
                <Card.Img src="./logoheader" />
                {/* data.image */}
                <Card.Body>
                  <Card.Title>soy subtitulo</Card.Title>
                  {/* data.subtitulo */}
                  <Card.Text>
                    Vincic, quien a los 42 años debutará en una Copa del Mundo,
                    es árbitro FIFA desde 2010 y dirigió en el Sub 17 de 2017 y
                    en el Sub 20 de 2019. Viene de ser el juez principal de la
                    final de la última Europa League, ganada por el Eintracht
                    Frankfurt de Alemania. Sin embargo, parece ser que hay una
                    historia que despertó la curiosidad de los seguidores del
                    fútbol en distintas partes del mundo y es que el encargado
                    de impartir justicia estuvo detenido tras encontrarse en el
                    lugar incorrecto en el momento incorrecto.
                  </Card.Text>
                  {/* data.description */}
                </Card.Body>
              </Card>

              <Button
                className="mt-5 mb-5"
                variant="warning"
                onClick={() => add(data)}
              >
                Agregar a favoritos <FontAwesomeIcon icon={faHeart} />
              </Button>
              <div className="col-12 line-style" />
            </div>
          ))}
          {/* <div className="col-12 col-md-9">
            <Categorias />
          </div> */}
        </Row>
      </Container>
    </div>
  );
};

export default Highlights;
