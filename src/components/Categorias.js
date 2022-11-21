import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

const Categorias = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Col>
        <Row>
          <Button
            className="mb-3 "
            variant="outline-secondary"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Categorías
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ListGroup className=" mb-5">
                <ListGroup.Item className="border-0 ">Fútbol</ListGroup.Item>
                <ListGroup.Item className="border-0 ">Tenis</ListGroup.Item>
                <ListGroup.Item className="border-0">Rugby</ListGroup.Item>
                <ListGroup.Item className="border-0">Atletismo</ListGroup.Item>
                <ListGroup.Item className="border-0">Boxeo</ListGroup.Item>
                <ListGroup.Item className="border-0">Voley</ListGroup.Item>
                <ListGroup.Item className="border-0">Básquet</ListGroup.Item>
                <ListGroup.Item className="border-0">Handball</ListGroup.Item>
                <ListGroup.Item className="border-0">Polo</ListGroup.Item>
                <ListGroup.Item className="border-0">Otros</ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
        </Row>
        <Row className="d-none d-lg-block ">
          <img
            alt=""
            src="https://scontent.fsla2-1.fna.fbcdn.net/v/t39.30808-6/294684783_3093572800893449_8540717541029371986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeEi0kXI4ndCV-73m5Nqcbgz_P3M2DTuwRH8_czYNO7BEdFcYvdt-kn6DIVGcV1EFO0&_nc_ohc=TY0hluuDUs4AX9WrNAf&_nc_oc=AQl7EjHG04FtQTzuyoG__BV1kbdK7KHSeS6z9H6JFts0EOA5v3LA11sA1z2E6_jYRi4&_nc_ht=scontent.fsla2-1.fna&oh=00_AfAq7M5TcGzmt6Fpt8ppb-_jQH2gfhhEpQ1ogEN8Rawfqg&oe=637BD06C"
            width="50"
            className="d-inline-block align-top "
          />
        </Row>
      </Col>
    </Container>
  );
};

export default Categorias;
