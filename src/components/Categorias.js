import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
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
          <Collapse className="collapse" in={open}>
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
                <ListGroup.Item className="item-list-categories link-nav">
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
        <Row className="d-none d-lg-block">
          <img
            alt=""
            src="https://scontent.fsla2-1.fna.fbcdn.net/v/t39.30808-6/294684783_3093572800893449_8540717541029371986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeEi0kXI4ndCV-73m5Nqcbgz_P3M2DTuwRH8_czYNO7BEdFcYvdt-kn6DIVGcV1EFO0&_nc_ohc=TY0hluuDUs4AX9WrNAf&_nc_oc=AQl7EjHG04FtQTzuyoG__BV1kbdK7KHSeS6z9H6JFts0EOA5v3LA11sA1z2E6_jYRi4&_nc_ht=scontent.fsla2-1.fna&oh=00_AfAq7M5TcGzmt6Fpt8ppb-_jQH2gfhhEpQ1ogEN8Rawfqg&oe=637BD06C"
            width="50"
            className="d-inline-block align-top publicity"
          />
        </Row>
      </Col>
    </Container>
  );
};

export default Categorias;
