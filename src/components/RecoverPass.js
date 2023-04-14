import React, { useState } from "react";
import { Row, Modal, Button, InputGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/allcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const RecoverPass = (toastSuccess) => {
  const [formEnviado, cambiarformEnviado] = useState(false);

  return (
    <>
      <body className="body-recover">
        <div className="container bgpass  py-5 mx-auto">
          <div className="row">
            <div className="row m-0 flex-row justify-content-between h-75">
              <div className="col-12 col-md-12 d-flex flex-column justify-content-center mb-5">
                <div className="row align-items-center">
                  <h1 className="recover-pass">Recuperar contraseña</h1>

                  <Formik
                    initialValues={{
                      mail: "",
                    }}
                    validate={(valores) => {
                      let errores = {};
                      if (!valores.mail) {
                        errores.mail = (
                          <p className="text-pass">
                            Por favor introduce tu mail
                          </p>
                        );
                      } else if (
                        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                          valores.mail
                        )
                      ) {
                        errores.mail = (
                          <p className="text-pass"> Introduce un mail valido</p>
                        );
                      }

                      return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                      resetForm();

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
                        <div className="input-group mb-3">
                          <div
                            className="input-group-text color-span"
                            id="basic-addon1"
                          >
                            <FontAwesomeIcon
                              style={{ fontSize: "2em", color: "#1986a0" }}
                              icon={faEnvelope}
                            />
                          </div>
                          <Field
                            id="mail"
                            name="mail"
                            type="mail"
                            className="form-control"
                            placeholder="Introduce tu mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <ErrorMessage
                          name="mail"
                          component={() => (
                            <div className="error">{errors.mail}</div>
                          )}
                        />
                        <Link
                          to="/error404"
                          className="link-pass"
                          style={{ textDecoration: "none" }}
                        >
                          <button className="btn-pass">Enviar</button>
                          {formEnviado &&
                            toastSuccess("Formulario enviado con exito")}
                        </Link>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default RecoverPass;
