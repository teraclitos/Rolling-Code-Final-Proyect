import { React, useState } from "react";
import "../styles/articlepublicitygrid.css";
import Categorias from "../components/Categorias";
import { Button, Card, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, Link, useParams } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Articlepublicitygrid = ({ data }) => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="container grid-articles-publicity mt-5 px-5 px-sm-2 px-md-0 ">
      <div className="grid-articles">
        {data.map((d, i) => (
          <div className="mb-3  ">
            <Card className="border-0 h-100 card">
              <Card.Img src={d.image} variant="top" className=" img-card" />
              <Card.Body className="p-0 ps-1 card-body  ">
                <h3 className="category-title fs-6 mt-2 mb-0">Fútbol</h3>
                <Card.Title className="mt-2 mb-0 card-title">
                  {d.title}
                </Card.Title>
                <Card.Text className="mt-1 mb-0 text-card-container ">
                  <p className="text-card">{d.description}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white card-footer ">
                <Link to={`/ArticleDetailContainer/${d.id}`}>
                  <Button className="py-1 px-2 btn-color ">Leer más</Button>
                </Link>
                <FontAwesomeIcon
                  className="align-self-center fs-5 text-danger"
                  icon={faHeart}
                />
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <div className="grid-publicity d-none d-lg-grid ">
        <div>
          <Categorias />
        </div>
      </div>
      <div className="d-flex  justify-content-center mt-1">
        <Pagination>{items}</Pagination>
      </div>
      <div className="grid-publicity d-grid d-lg-none ">
        <div>
          <Categorias />
        </div>
      </div>
    </div>
  );
};

export default Articlepublicitygrid;
