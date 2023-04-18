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

  add,
  auth,
  del,

  handleShowLogin,
  setIsLoading,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavorite,
  setModifyFavorite,
  modifyFavoriteFetch,
}) => {
  const adding = (p) => {
    setModifyFavorite(true);
    add(p);
  };

  const deleting = (p) => {
    setDeleteFavorite(true);

    del(p);
  };

  useEffect(() => {
    if (modifyFavorite === true) {
      modifyFavoriteFetch();
      setModifyFavorite(null);
    }
  }, [cart]);
  useEffect(() => {
    if (deleteFavorite === true) {
      modifyFavoriteFetch();
      setDeleteFavorite(null);
    }
  }, [cart]);

  return (
    <Card className=" h-100 card-container border-0 px-2">
      <Link
        to={auth.user && `/ArticleDetailContainer/${d._id}`}
        onClick={() => {
          !auth.user ? handleShowLogin() : setIsLoading(true);
        }}
      >
        <Card.Img src={d.img_URL} variant="top" className=" img-card" />
      </Link>
      <Card.Body className="p-0  card-body  ">
        <h3 className="category-title fs-6 mt-2 mb-0 ps-2 text-start">
          {d.category}
        </h3>
        <Card.Title className="mt-2 mb-0 card-title text-start">
          {d.title}
        </Card.Title>
        <div className="mt-1 mb-0 text-card-container ">
          <p className="text-card text-start">{d.description}</p>
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between p-0 border-0 bg-white card-footer ">
        <Link
          className="btn-reed px-3 py-2 align-self-center "
          to={auth.user ? `/ArticleDetailContainer/${d._id}` : "/"}
          onClick={() => {
            !auth.user ? handleShowLogin() : setIsLoading(true);
          }}
        >
          Leer más
        </Link>
        {auth.role === "user" && (
          <Button
            onClick={() => {
              cart.filter((element) => element._id === d._id).length !== 1
                ? adding(d)
                : deleting(d);
            }}
            className=" px-2 pt-2 pb-1   icon-heart-container "
          >
            <FontAwesomeIcon
              className={
                cart.filter((element) => element._id === d._id).length !== 1
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
