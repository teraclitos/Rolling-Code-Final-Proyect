import { React, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/allcss.css";

const Slider = ({ totalHighlights }) => {
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
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
