import { React } from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="container-fluid containerbg grid-header pt-4 ">
      <div className="fs-1 "></div>
      <div className=" text-center d-flex justify-content-center align-items-center ">
        <h3 className="text-header  d-none d-md-block fs-1 ">
          Potenciamos
          <br />
          tu pasión
        </h3>
      </div>
      <div className="fs-1 d-flex flex-column align-items-center justify-content-center grid-center-header ">
        <img className="img-header" src="\logoheader.png" alt="logo-hero" />
        <h3 className="text-header  d-block d-md-none fs-1 mt-5 text-center">
          Potenciamos
          <br />
          tu pasión
        </h3>
      </div>
      <div className="fs-1 "></div>
    </div>
  );
};

export default Header;
