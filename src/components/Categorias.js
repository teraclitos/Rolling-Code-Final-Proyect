import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import "../styles/articlepublicitygrid.css";

const Categorias = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Col>
        <Row className="d-flex justify-content-center">
          <Button
            className="mb-3 mt-5  btn-categories"
            variant="outline-secondary "
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Categorías
          </Button>
          <Collapse className="collapse-estilos" in={open}>
            <div id="example-collapse-text  ">
              <ListGroup className=" mb-5 list-categories">
                <ListGroup.Item className="item-list-categories link-category ">
                  Fútbol
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category ">
                  Tenis
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Rugby
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Atletismo
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Boxeo
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Voley
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Básquet
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Handball
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Polo
                </ListGroup.Item>
                <ListGroup.Item className="item-list-categories link-category">
                  Otros
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
        </Row>
        <Row className="d-none d-lg-block carrousel-advertisement">
          <Carousel
            className=""
            controls={false}
            indicators={false}
            slide={false}
            touch={false}
            pause={false}
          >
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://www.latinspots.com/files/notas/Gpowerade_beijing_08_web.jpg"
                alt="First slide"
              />{" "}
              <Carousel.Caption></Carousel.Caption>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://media.informabtl.com/wp-content/uploads/2011/03/Puma-Social-768x512.jpg"
                alt="Second slide"
              />{" "}
              <Carousel.Caption></Carousel.Caption>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://p4.wallpaperbetter.com/wallpaper/529/666/472/advertising-logo-nike-poster-wallpaper-preview.jpg"
                alt="Third slide"
              />{" "}
            </Carousel.Item>{" "}
          </Carousel>
        </Row>
      </Col>
    </Container>
  );
};

export default Categorias;
