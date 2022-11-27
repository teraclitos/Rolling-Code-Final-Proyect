import React, { useState } from "react";
import { Container, Row, Form, Modal, Button } from "react-bootstrap";
import { Formik } from "formik";
import "../styles/recoverPass.css";

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
                  <h3 className="recover-pass">Recuperar contraseña</h3>
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
                          <Form.Group className="mb-3 text-center">
                            <Form.Label className="text-danger rounded"></Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Ingrese su correo electronico"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              maxLength={20}
                            />
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
                  <Row>
                    <Button className="btn-pass" onClick={handleShowPass}>
                      Enviar Mail
                    </Button>
                  </Row>

                  <Modal show={pass} onHide={passClose} animation={false}>
                    <Modal.Body>
                      <Formik
                        initialValues={{ passNew: "", checkPassNew: "" }}
                        validate={(valores) => {
                          let errors = {};
                          if (!valores.passNew) {
                            errors.passNew =
                              "Por favor ingrese su nueva contraseña.";
                          } else if (/\s/.test(valores.passNew)) {
                            errors.passNew =
                              "La contraseña no puede tener espacios.";
                          }
                          if (!valores.checkPassNew) {
                            errors.checkPassNew =
                              "Por favor confirme su nueva contraseña.";
                          } else if (valores.passNew !== valores.checkPassNew) {
                            errors.checkPassNew =
                              "Las contraseñas no coinciden.";
                          }

                          return errors;
                        }}
                        onSubmit={(valores, { resetForm }) => {
                          resetForm();
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
                              <Form.Label>Nueva Contraseña</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Ingrese su nueva contraseña"
                                value={values.passNew}
                                id="passNew"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                maxLength={15}
                              />
                              {touched.passNew && errors.passNew && (
                                <Form.Text className="text-danger">
                                  <b>{errors.passNew}</b>
                                </Form.Text>
                              )}
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>
                                Confirmar nueva contraseña
                              </Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Confirme su contraseña"
                                id="checkPassNew"
                                value={values.checkPassNew}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                maxLength={15}
                              />
                              {touched.checkPassNew && errors.checkPassNew && (
                                <Form.Text className="text-danger">
                                  <b>{errors.checkPassNew}</b>
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Form>
                        )}
                      </Formik>
                    </Modal.Body>
                    <div className="d-flex justify-content-center m-2">
                      <Button className="btn-pass" onClick={passClose}>
                        Cerrar
                      </Button>
                      <Button className="btn-pass" onClick={passClose}>
                        Guardar Cambios
                      </Button>
                    </div>
                  </Modal>
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
