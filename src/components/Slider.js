import { React, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link, useParams } from "react-router-dom";
import "../styles/allcss.css";

const Slider = ({
  totalHighlights,
  cart,
  d,
  add,
  auth,
  toastError,
  handleShowLogin,
}) => {
  return (
    <Carousel
      indicators={false}
      pause={false}
      className=" d-none d-lg-block slider-container"
    >
      {totalHighlights.map((d, i) => (
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 slider-img"
            src={d.img_URL}
            alt="First slide"
          />
          <Carousel.Caption>
            <Link
              className="text-slider"
              to={
                auth.role === "admin" || auth.role === "user"
                  ? `/ArticleDetailContainer/${d._id}`
                  : "/"
              }
              onClick={() => {
                !auth.user && handleShowLogin();
              }}
              style={{ textDecoration: "none" }}
            >
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
