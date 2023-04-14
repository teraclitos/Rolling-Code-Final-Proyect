import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/allcss.css";

const OffcanvasFav = ({
  clear,
  del,
  cart,
  handleClose,
  show,
  setShow,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavoriteFetch,
}) => {
  const [clearAll, setClearAll] = useState(null);
  useEffect(() => {
    if (deleteFavorite === true) {
      modifyFavoriteFetch();
      setDeleteFavorite(null);
    }
  }, [cart]);
  useEffect(() => {
    if (clearAll === true) {
      modifyFavoriteFetch();
      setClearAll(null);
    }
  }, [cart]);

  const deleting = (c) => {
    setDeleteFavorite(true);
    del(c);
  };
  const deletingAll = () => {
    setClearAll(true);
    clear();
  };

  return (
    <div>
      <Offcanvas className="bg-offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="style-favorite">
            Mis Favoritos ({cart.length})
          </Offcanvas.Title>
          {cart.length > 0 && (
            <Button className="btn-favorite" onClick={() => deletingAll()}>
              Limpiar favoritos
            </Button>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length
            ? cart.map((c, i) => (
                <Row key={i}>
                  <Col className="">{c.title}</Col>

                  <Col>{c.price}</Col>

                  <Col>
                    <Button className="btn-trash" onClick={() => deleting(c)}>
                      <FontAwesomeIcon className="text-danger" icon={faTrash} />
                    </Button>
                  </Col>
                  <div className="col-12 card-highlights" />
                </Row>
              ))
            : "Sin favoritos"}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasFav;
