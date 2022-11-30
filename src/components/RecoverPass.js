import React, { useState } from "react";
import { Row, Form, Modal, Button, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import "../styles/allcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const RecoverPass = () => {
  const [show, setShowPass] = useState(false);
  const [pass, setPass] = useState(false);

  const passClose = () => setPass(false);
  const passShow = () => setPass(true);
  const handleClosePass = () => setShowPass(false);
  const handleShowPass = () => setShowPass(true);
  return (
    <>
      <body className="body-recover">
        <div className="container bgpass  py-5 mx-auto">
          <div className="row align-items-stretch">
            <div className="row m-0 flex-row justify-content-between h-75">
              <div className="col-12 col-md-12 d-flex flex-column justify-content-center mb-5">
                <div className="row align-items-center">
                  <h1 className="recover-pass">Recuperar contraseña</h1>
                  <Row>
                    <Formik
                      initialValues={{ email: "" }}
                      validate={(valores) => {
                        let errors = {};
                        if (!valores.email) {
                          errors.email =
                            "Por favor ingrese su correo electrónico.";
                        } else if (
                          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                            valores.email
                          )
                        ) {
                          errors.email = "Ingrese un correo electrónico válido";
                        }
                        return errors;
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <InputGroup.Text className="color-span">
                                <FontAwesomeIcon
                                  style={{ fontSize: "2em", color: "#1986a0" }}
                                  icon={faEnvelope}
                                />
                              </InputGroup.Text>
                              <Form.Control
                                type="email"
                                placeholder="Ingrese su correo electronico"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                maxLength={20}
                              />
                            </InputGroup>
                            {touched.email && errors.email && (
                              <Form.Text className="text-danger">
                                <b>{errors.email}</b>
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Form>
                      )}
                    </Formik>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Link to="/error404" style={{ textDecoration: "none" }}>
                      <Button className="btn-pass" onClick={handleShowPass}>
                        Enviar Mail
                      </Button>
                    </Link>
                  </Row>
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
