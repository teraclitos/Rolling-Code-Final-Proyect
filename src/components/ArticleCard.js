import "../styles/allcss.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import React from "react";

const ArticleCard = ({ cart, d, add, auth, toastError, handleShowLogin }) => {
  return (
    <Card className=" h-100 card-container border-0 px-2">
      <Card.Img src={d.img_URL} variant="top" className=" img-card" />
      <Card.Body className="p-0  card-body  ">
        <h3 className="category-title fs-6 mt-2 mb-0 ps-2 text-start">
          {d.category}
        </h3>
        <Card.Title className="mt-2 mb-0 card-title text-start">
          {d.title}
        </Card.Title>
        <Card.Text className="mt-1 mb-0 text-card-container ">
          <p className="text-card text-start">{d.description}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between p-0 border-0 bg-white card-footer ">
        <Link
          className="btn-reed mb-2"
          to={auth.user ? `/ArticleDetailContainer/${d._id}` : "/"}
          onClick={() => {
            !auth.user && handleShowLogin();
          }}
        >
          {/* <Button className="py-1 px-2 btn-color ">Leer más</Button> */}
          Leer más
        </Link>
        {auth.user === "user" && (
          <Button
            disabled={cart.includes(d)}
            onClick={() => add(d)}
            className="btn-like "
          >
            <FontAwesomeIcon
              className="align-self-center fs-5 text-danger"
              icon={faHeart}
            />
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
