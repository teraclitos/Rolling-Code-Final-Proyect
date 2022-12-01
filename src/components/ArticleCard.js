import "../styles/allcss.css";
import Categorias from "../components/Categorias";
import { Button, Card, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Advertising from "./Advertising";
import Header from "../components/Header";
import AsideAdvertisement from "./AsideAdvertisement";

import React from "react";

const ArticleCard = ({ cart, d, add, auth }) => {
  return (
    <div>
      {" "}
      <Card className=" h-100 card-grid">
        <Card.Img src={d.img_URL} variant="top" className=" img-card" />
        <Card.Body className="p-0 ps-1 card-body  ">
          <h3 className="category-title fs-6 mt-2 mb-0">{d.category}</h3>
          <Card.Title className="mt-2 mb-0 card-title">{d.title}</Card.Title>
          <Card.Text className="mt-1 mb-0 text-card-container ">
            <p className="text-card">{d.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white card-footer ">
          <Link
            className="btn-reed mb-2"
            to={
              auth.user === "admin" || auth.user === "user"
                ? `/ArticleDetailContainer/${d.id}`
                : "/"
            }
          >
            {/* <Button className="py-1 px-2 btn-color ">Leer más</Button> */}
            Leer más
          </Link>
          {auth.user === "user" && (
            <Button
              disabled={cart.includes(d)}
              onClick={() => add(d)}
              className="btn-like"
            >
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ArticleCard;
