import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="mt-auto background-footer">
        <div className="d-flex flex-column align-items-center">
          <div className="row footer-contenido m-0 justify-content-center p-0 pt-4 text-white w-100">
            <div className="col-12 col-sm-6 col-md-3 p-2 mt-4 d-flex justify-content-center w-auto align-items-center m-2">
              {/* <Link to='/' className='m-0 p-0 d-flex flex-column align-items-center text-decoration-none'/>  */}
              <img src="./logoRollingneta.png" width="100" alt="logo" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 p-0 d-flex flex-column align-items-center">
              <div className=" w-50">
                <div className="row m-2 justify-content-center ">
                  <h6 className="my-3 fw-bold text-center mt-5">
                    REDES SOCIALES
                  </h6>
                  <div className="col-3  btn-footer">
                    {/* agregar link a icono */}
                    <FontAwesomeIcon icon={faHashtag} />
                  </div>
                  <div className="col-3 btn-footer">
                    {/* agregar link a icono */}
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                  </div>
                  <div className="col-3 btn-footer">
                    {/* agregar link a icono */}
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </div>
                  <div class="col-3 btn-footer">
                    {/* agregar link a icono */}
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 p-0 d-flex flex-column align-items-center">
              <div class="row m-2 justify-content-center">
                <h6 className="my-3 fw-bold text-center mt-5">CONTACTANOS</h6>
                <h8 className="text-center">Av. Siempre Vivas</h8>
                <h8 className="text-center">Acerca de Nosotros</h8>
              </div>
            </div>
            <div className="col-xs-12 p-0 mt-4 copyright">
              <p className="m-0 my-2 text white text-center">
                COPYRIGHT© - GRUPO 2 - PROYECTO Rollingneta - 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
