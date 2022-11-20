import { React } from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="container-fluid containerbg grid-header pt-4 ">
      <div className="fs-1 ">1</div>
      <div className=" text-center d-flex justify-content-center align-items-center ">
        <h3 className="text-header  d-none d-md-block">
          Potenciamos
          <br />
          tu pasión
        </h3>
      </div>
      <div className="fs-1 grid-center-header">
        <div className=" d-flex flex-columns align-items-center img-header-container  ">
          <img className="img-header" src="\logoheader.png" alt="logo-hero" />
          <h3 className="text-header  d-block d-md-none fs-1">
            Potenciamos
            <br />
            tu pasión
          </h3>
          <div className="searcher d-none d-md-block"></div>
        </div>
        <div className="">3</div>
      </div>
      <div className="fs-1 ">3</div>
    </div>
  );
};

export default Header;
