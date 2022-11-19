import React from "react";
import "../styles/contact.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <body className="body-contacto">
        <div className="container bgcontact  py-5 mx-auto">
          <div className="row align-items-stretch">
            <div className="row m-0 flex-row justify-content-between h-75">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <div className="container justify-content-center align-items-center d-flex mapa">
                  <iframe
                    class="mapa mt-3"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3348.3570491657824!2d-60.65922018439898!3d-32.94158147896277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1656623430770!5m2!1ses!2sar"
                    width="300"
                    height="300"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="col-12 col-md-6 d-flex flex-column justify-content-center mt-5">
                <div className="row align-items-stretch">
                  <h3 className="titulo-contacto">CONTACTO</h3>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">
                      <FontAwesomeIcon
                        style={{ fontSize: "1em", color: " #1986a0" }}
                        icon={faUser}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Ingresa tu nombre"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">
                      <FontAwesomeIcon
                        style={{ fontSize: "1em", color: " #1986a0" }}
                        icon={faEnvelope}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder=" Ingresa tu Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        style={{ fontSize: "1em", color: " #1986a0" }}
                        icon={faPenToSquare}
                      />
                    </InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Contact;
