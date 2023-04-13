import "../styles/allcss.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import React, { useEffect, useState } from "react";

const ArticleCard = ({
  cart,
  d,
  i,
  add,
  auth,
  del,
  toastError,
  handleShowLogin,
  setIsLoading,
}) => {
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
          className="btn-reed px-3 py-2 align-self-center "
          to={auth.user ? `/ArticleDetailContainer/${d._id}` : "/"}
          onClick={() => {
            !auth.user && handleShowLogin();
            setIsLoading(true);
          }}
        >
          Leer más
        </Link>
        {auth.role === "user" && (
          <Button
            onClick={() => {
              !cart.includes(d) ? add(d) : del(d);
            }}
            className=" px-2 pt-2 pb-1   icon-heart-container "
          >
            <FontAwesomeIcon
              className={
                !cart.includes(d)
                  ? "align-self-center fs-5 icon-heart "
                  : "align-self-center fs-5 icon-heart heart-favorite"
              }
              icon={faHeart}
            />
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
