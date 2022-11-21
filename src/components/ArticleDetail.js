import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button, Card, Container, Row, Col, Pagination } from "react-bootstrap";
import { faHashtag, faHeart } from "@fortawesome/free-solid-svg-icons";
import Categorias from "./Categorias";
import "../styles/articledetail.css";
import { Route, Routes, Link, useParams } from "react-router-dom";

const ArticleDetail = ({ data }) => {
  return (
    <div>
      <Container>
        <Row xs={1} md={2} className="g-5">
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
                      <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div className="red-social">
                      <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div className="red-social">
                      <FontAwesomeIcon icon={faHashtag} />
                    </div>
                  </div>

                  <div className="col-12 linea-style" />
                </Card.Text>
                <Card.Title className="text-center">{data.title}</Card.Title>
                {/* data.title */}
              </Card.Body>
            </Card>
            <Card border="0" style={{ width: "18rem" }}>
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
          <div className="col-12 col-md-3">
            {/* aca reemplazar por el contador de favoritos de andre */}
            <Button className=" mt-5 mb-5 text-danger" variant="warning">
              Agregar a favoritos <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Categorias />
            {/* {data.description} */}
            {/* </section> */}
            {/* <section className="colum-right">
           <Categorias />
        </section> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleDetail;
