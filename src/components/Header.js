import { React, useEffect, useState } from "react";
import "../styles/allcss.css";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const navHeight = () => {
    let navBarHeight = document.getElementById("nav-bar-logo").clientHeight;
    return navBarHeight;
  };
  const screenHeight = () => {
    let screenHeight = window.innerHeight;
    return screenHeight;
  };
  const headerHeight = () => {
    let height = screenHeight() - navHeight() - 16;

    return height;
  };
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const [stateHeight, setstateheight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setstateheight(headerHeight);
  }, [width]);
  return (
    <div
      style={{ height: `${stateHeight}px` }}
      className="container-fluid containerbg grid-header pt-4 "
    >
      <div className="fs-1 d-flex flex-column justify-content-center align-items-center icon-container">
        <FontAwesomeIcon className="icon-fb" icon={faFacebook} />
        <FontAwesomeIcon className="icon-tw" icon={faTwitter} />
        <FontAwesomeIcon className="icon-ig" icon={faInstagram} />
      </div>
      <div className=" text-center d-flex justify-content-center align-items-center ">
        <h3 className="text-header  d-none d-md-block fs-1 ">
          Potenciamos
          <br />
          tu pasión
        </h3>
      </div>

      <div className="fs-1 d-flex flex-column align-items-center justify-content-center grid-center-header ">
        <img className="img-header" src="\logoheader.png" alt="logo-hero" />{" "}
        <h3 className="text-header  d-block d-md-none fs-1  text-center">
          Potenciamos
          <br />
          tu pasión
        </h3>
      </div>

      <div></div>
    </div>
  );
};

export default Header;
