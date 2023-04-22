import { React, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link, useParams } from "react-router-dom";
import "../styles/allcss.css";

const Slider = ({
  totalHighlights,
  setIsLoading,
  auth,

  handleShowLogin,
}) => {
  return (
    <Carousel
      indicators={false}
      pause={false}
      className=" d-none d-lg-block slider-container overlayed-background-slider-container"
    >
      {totalHighlights.map((d, i) => (
        <Carousel.Item key={"carousel" + i} interval={3000}>
          <img
            className="d-block w-100 slider-img"
            src={d.img_URL}
            alt="First slide"
          />
          <Carousel.Caption className="text-slider-container">
            <Link
              className="text-slider"
              to={auth.role && `/ArticleDetailContainer/${d._id}`}
              onClick={() => {
                !auth.user ? handleShowLogin() : setIsLoading(true);
              }}
              style={{ textDecoration: "none" }}
            >
              <h3 className="fs-2 mb-3">{d.title}</h3>
              <p className="fs-5">{d.description}</p>
            </Link>
          </Carousel.Caption>
          <div className="overlayed-background-slider"></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
