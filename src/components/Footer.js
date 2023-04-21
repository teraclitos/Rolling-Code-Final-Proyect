import React from "react";
import "../styles/allcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
const Footer = ({
  setNewLoad,
  newLoad,
  setIsLoading,
  setIsLoadingHighlight,
}) => {
  return (
    <div>
      <footer className="mt-auto background-footer">
        <div className="d-flex flex-column align-items-center">
          <div className="row footer-contenido m-0 justify-content-center p-0 pt-4 text-white w-100">
            <div className="col-12 col-sm-6 col-md-3 p-2 mt-4 d-flex justify-content-center w-auto align-items-center m-2">
              <img
                onClick={() => {
                  setNewLoad(newLoad + 1);
                  setIsLoading(true);
                  setIsLoadingHighlight(true);
                }}
                className="logo-footer"
                src="./logoRollingneta.png"
                width="100"
                alt="logo"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 p-0 d-flex flex-column align-items-center">
              <div className=" w-50">
                <div className="row m-2 justify-content-center ">
                  <h6 className="my-3 fw-bold d-flex justify-content-center text-center mt-5 text-footer">
                    REDES SOCIALES
                  </h6>

                  <div className="col-3 btn-footer">
                    <FontAwesomeIcon
                      style={{ fontSize: "2em" }}
                      className="icon-fb"
                      icon={faFacebook}
                    />
                  </div>
                  <div className="col-3 btn-footer">
                    <FontAwesomeIcon
                      style={{ fontSize: "2em" }}
                      className="icon-ig"
                      icon={faInstagram}
                    />
                  </div>
                  <div className="col-3 btn-footer">
                    <FontAwesomeIcon
                      style={{ fontSize: "2em" }}
                      className="icon-tw"
                      icon={faTwitter}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 p-0 d-flex flex-column align-items-center">
              <div className="row m-2 justify-content-center">
                <h6 className="my-3 fw-bold text-center mt-5 text-footer">
                  CONTACTANOS
                </h6>
                <h6 className="text-center">Av. Siempre Vivas 846 -SMT</h6>
              </div>
            </div>
            <div className="col-xs-12 p-0 mt-4 copyright">
              <p className="m-0 my-2 text white text-center">
                COPYRIGHT© - PROYECTO Rollingneta - 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
