import { React, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const AsideAdvertisement = () => {
  return (
    <>
      <Carousel
        className="sticky-top carousel-advertisement-scroll-top"
        controls={false}
        indicators={false}
        slide={false}
        touch={false}
        pause={false}
      >
        <Carousel.Item interval={1500}>
          <img
            src="\publicidad-first.png"
            className="d-block w-100  "
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="\publicidad-2.png"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="\publicidad-third.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="\publicad-4-2-3.png"
            alt="fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="\publicidad-4-medio.png"
            alt="fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="\publicidad-4-3.png"
            alt="sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="\publicidad-5.png"
            alt="seventh slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default AsideAdvertisement;
