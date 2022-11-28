import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
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
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Categorias from "./Categorias";
import { Route, Routes, Link, useParams } from "react-router-dom";

const Highlights = ({ data, add, cart }) => {
  const [arrayFavourites, setArrayFavourites] = useState([
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
    { condition: "text-dark" },
  ]);
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [image, setimage] = useState("");
  const [sybtitulo, setSubtitulo] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [edition, setEdition] = useState("");

  const handleEdition = () => {
    setEdition(!edition);
  };
  useEffect(() => {
    setArrayFavourites(arrayFavourites);
    console.log(arrayFavourites);
  }, [arrayFavourites]);

  const starting = (i) => {
    let array = [];

    arrayFavourites.forEach((element) => {
      array.push(element);
    });
    if (array[i].condition === "text-dark") {
      array[i].condition = "text-warning";
    } else {
      array[i].condition = "text-dark";
    }

    setArrayFavourites(array);
  };
  return (
    <div>
      <Container fluid>
        <h2 className="title-news text-center">Noticias de la Semana</h2>
        <Row xs={1} md={2}>
          {data.map((d, i) => (
            <div className="col-12 col-md-12">
              <Card border="0" className="mt-5 card-highlights">
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
                  <Card.Title className="text-center">{d.title}</Card.Title>
                  {/* data.title */}
                </Card.Body>
              </Card>
              <Card border="0">
                <Card.Img src="./logoheader" />
                {/* data.image */}
                <Card.Body className="card-destacado">
                  <Card.Title>soy subtitulo</Card.Title>
                  {/* data.subtitulo */}
                  <Card.Text>{d.description}</Card.Text>
                  {/* data.description */}
                </Card.Body>
              </Card>

              <Button
                className="mt-5 mb-5"
                variant="primary"
                // onClick={() => add(data)}
              >
                Agregar a favoritos
                <FontAwesomeIcon
                  id={`favourite${i}`}
                  className={arrayFavourites[i].condition}
                  icon={faStar}
                  onClick={() => {
                    starting(i);
                    console.log(arrayFavourites);
                  }}
                />
              </Button>
              <div className="col-12 line-style" />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Highlights;
