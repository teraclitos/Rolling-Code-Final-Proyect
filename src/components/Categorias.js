import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

import "../styles/allcss.css";

const Categorias = (data) => {
  const [open, setOpen] = useState(false);

  return (
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
          </ListGroup>
        </div>
      </Collapse>
    </Row>
  );
};

export default Categorias;
