import React, { useState } from "react";
import "../styles/allcss.css";
// import Form from "react-bootstrap/Form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formEnviado, cambiarformEnviado] = useState(false);
  return (
    <div>
      <body className="body-contacto ">
        <div className="container bgcontact py-5 mx-auto">
          <div className="row align-items-stretch">
            <div className="row m-0 flex-row justify-content-between h-75">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <div className="container justify-content-center align-items-center d-flex mapa">
                  <iframe
                    class="mapa mt-3"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3348.3570491657824!2d-60.65922018439898!3d-32.94158147896277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1656623430770!5m2!1ses!2sar"
                    width="400"
                    height="400"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-center mt-5">
                <div className="row  align-items-stretch">
                  <h3 className="titulo-contacto">CONTACTO</h3>
                  <Formik
                    initialValues={{
                      name: "",
                      mail: "",
                      comment: "",
                    }}
                    validate={(valores) => {
                      let errores = {};
                      if (!valores.name) {
                        errores.name = (
                          <p className="text-contact">Escribe tu nombre</p>
                        );
                      } else if (!/^[a-zA-ZÀ-ÿ\s]{3,30}$/.test(valores.name)) {
                        errores.name = (
                          <p className="text-contact">
                            El nombre solo puede contener letras y espacios
                          </p>
                        );
                      }

                      //validacion mail
                      if (!valores.mail) {
                        errores.mail = (
                          <p className="text-contact">
                            por favor introduce tu mail
                          </p>
                        );
                      } else if (
                        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                          valores.mail
                        )
                      ) {
                        errores.mail = (
                          <p className="text-contact">
                            {" "}
                            Introduce un mail valido"
                          </p>
                        );
                      }
                      if (!valores.comment) {
                        errores.comment = (
                          <p className="text-contact"> Escribe tu comentario</p>
                        );
                      }
                      return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                      resetForm();
                      console.log("form enviado");
                      cambiarformEnviado(true);
                      setTimeout(() => cambiarformEnviado(false), 3000);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                    }) => (
                      <Form>
                        <div class="input-group mb-3">
                          <span
                            class="input-group-text color-span"
                            id="basic-addon1"
                          >
                            <FontAwesomeIcon
                              style={{ fontSize: "2em", color: "#1986a0" }}
                              icon={faUser}
                            />
                          </span>
                          <Field
                            id="name"
                            name="name"
                            // value={values.name}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            type="text"
                            class="form-control"
                            placeholder="Introduce tu nombre"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <ErrorMessage
                          name="name"
                          component={() => (
                            <div className="error">{errors.name}</div>
                          )}
                        />
                        <div class="input-group mb-3">
                          <span
                            class="input-group-text color-span"
                            id="basic-addon1"
                          >
                            <FontAwesomeIcon
                              style={{ fontSize: "2em", color: "#1986a0" }}
                              icon={faEnvelope}
                            />
                          </span>
                          <Field
                            id="mail"
                            name="mail"
                            type="mail"
                            class="form-control"
                            placeholder="Introduce tu mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            // value={values.mail}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                          />
                        </div>
                        <ErrorMessage
                          name="mail"
                          component={() => (
                            <div className="error">{errors.mail}</div>
                          )}
                        />
                        {/* {touched.mail && errors.mail && (
                          <div className="error">{errors.mail}</div>
                        )} */}
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text color-span"
                            id="basic-addon1"
                          >
                            <FontAwesomeIcon
                              style={{ fontSize: "2em", color: "#1986a0" }}
                              icon={faPenToSquare}
                            />
                          </span>
                          <Field
                            id="comment"
                            name="comment"
                            as="textarea"
                            class="form-control"
                            placeholder=""
                            // aria-label="Username"
                            // aria-describedby="basic-addon1"
                            // value={values.comment}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                          />
                        </div>
                        <ErrorMessage
                          name="comment"
                          component={() => (
                            <div className="error">{errors.comment}</div>
                          )}
                        />
                        {/* {touched.comment && errors.comment && (
                          <div className="error">{errors.comment}</div>
                        )} */}
                        <button className="btn-contact d-flex" type="submit">
                          Enviar
                        </button>
                        {formEnviado && (
                          <p className="exito">Comentario enviado</p>
                        )}
                      </Form>
                    )}
                  </Formik>
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
