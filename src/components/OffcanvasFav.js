import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

const OffcanvasFav = ({
  clear,
  del,
  cart,
  show,
  handleClose,
  show,
  setShow,
}) => {
  return (
    <div>
      <Offcanvas className="bg-offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="style-favorite">
            Mis favoritos ({cart.length})
          </Offcanvas.Title>
          {cart.length > 0 && (
            <Button className="btn-favorite" onClick={() => clear()}>
              Limpiar favoritos
            </Button>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length
            ? cart.map((c, i) => (
                <Row key={i}>
                  <Col>{c.title}</Col>
                  <Col>{c.price}</Col>
                  <Col>
                    <Button className="btn-trash" onClick={() => del(c)}>
                      <FontAwesomeIcon className="text-danger" icon={faTrash} />
                    </Button>
                  </Col>
                </Row>
              ))
            : "Sin favoritos"}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasFav;
