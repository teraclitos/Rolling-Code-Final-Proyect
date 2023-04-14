import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/allcss.css";
import "../styles/scrollbaroffcanvas.css";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

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
  auth,
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
        <Offcanvas.Header className="bg-offcanvas-favorite-header " closeButton>
          <Offcanvas.Title className="style-favorite">
            Mis Favoritos ({cart.length})
          </Offcanvas.Title>
          {cart.length > 0 && (
            <Button className="btn-favorite" onClick={() => deletingAll()}>
              Limpiar favoritos
            </Button>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-offcanvas-favorite">
          {cart.length
            ? cart.map((c, i) => (
                <Row key={i}>
                  <Col className="d-flex justify-content-between py-3">
                    <Link className="" to={`/ArticleDetailContainer/${c._id}`}>
                      <Card className="img-favorite-card bg-dark text-white rounded-0 border-0  me-4">
                        <Card.Img src={c.img_URL} alt="Card image" />
                        <Card.ImgOverlay className="d-flex align-items-center img-overlayed-favorite">
                          <Card.Text className="mb-2 ">
                            <span className="d-block text-start text-card-favorite">
                              {c.title}
                            </span>
                          </Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                    </Link>

                    <Button
                      className="btn-trash align-self-center "
                      onClick={() => deleting(c)}
                    >
                      <FontAwesomeIcon className="text-danger" icon={faTrash} />
                    </Button>
                  </Col>

                  {/* <div className="col-12 card-highlights" /> */}
                </Row>
              ))
            : "Sin favoritos"}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasFav;
