import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/allcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RecoverPass = ({
  toastSuccess,
  toastError,
  setIsLoading,
  setNewLoad,
  newLoad,
  setIsLoadingHighlight,
}) => {
  const navigation = useNavigate();
  const [recoverOK, setRecoverOK] = useState(null);
  const recoverPassword = (mail) => {
    fetch("https://backend-news-eight.vercel.app/users/resetpassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          setRecoverOK(true);
          toastSuccess("Se le ha enviado una nueva contraseña a su mail");
          setTimeout(() => {
            setIsLoading(true);
            setIsLoadingHighlight(true);
            setNewLoad(newLoad + 1);
            navigation("/");
          }, 4000);
        } else {
          setRecoverOK(false);
          toastError(json.message);
        }
      });
  };

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
                          <p className="text-contact">
                            Por favor introduce tu mail
                          </p>
                        );
                      } else if (valores.mail.trim().length < 3) {
                        errores.mail = (
                          <p className="text-contact">
                            Debe tener al menos 3 caracetres
                          </p>
                        );
                      } else if (
                        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                          valores.mail
                        )
                      ) {
                        errores.mail = (
                          <p className="text-contact">
                            Introduce un mail valido
                          </p>
                        );
                      }

                      return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                      const mail = valores.mail;

                      recoverPassword(mail);

                      if (recoverOK === true) {
                        resetForm();
                        setRecoverOK(null);
                      }
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
                            className={
                              errors.mail && touched.mail
                                ? "form-control outline-input wrong-border"
                                : "form-control outline-input "
                            }
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

                        <button
                          onClick={() => {
                            if (errors.mail) {
                              toastError(
                                "Debe completar correctamente todos los campos obligatorios"
                              );
                            }
                          }}
                          type="submit"
                          className="btn-pass"
                        >
                          Enviar
                        </button>
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
