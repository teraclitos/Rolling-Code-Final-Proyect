import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import "../styles/allcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ModalRegister = ({
  showRegister,
  setShowRegister,
  toastError,
  toastSuccess,
}) => {
  const handleCloseRegister = () => {
    setShowRegister(false);
    setFirstValidationMail(true);
    setFirstValidationName(true);
    setFirstValidationUser(true);
    setFirstValidationPassword(true);
    setFirstValidationRepeatPassword(true);
    setConditions(false);
    setWrongBorderMail(false);
    setWrongBorderName(false);
    setWrongBorderPassword(false);
    setWrongBorderUser(false);
    setWrongBorderrepeatPassword(false);
    setErrorToastRequiredField(false);
  };

  const saveUser = () => {
    fetch("https://backend-news-eight.vercel.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        name: name,
        email: mails,
        password: password,
        termsandconditions: conditions,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          toastError(json.message);
        } else {
          saveUser();
          setMails("");
          setName("");
          setUser("");
          setPassword("");
          setRepeatPassword("");
          setFirstValidationMail(true);
          setFirstValidationName(true);
          setFirstValidationUser(true);
          setFirstValidationPassword(true);
          setFirstValidationRepeatPassword(true);
          handleCloseRegister();
          toastSuccess("Se ha registrado correctamente");
        }
      });
  };

  const [mails, setMails] = useState("");
  const [firstValidationMail, setFirstValidationMail] = useState(true);
  const [name, setName] = useState("");
  const [firstValidationName, setFirstValidationName] = useState(true);
  const [user, setUser] = useState("");
  const [firstValidationUser, setFirstValidationUser] = useState(true);
  const [password, setPassword] = useState("");
  const [firstValidationPassword, setFirstValidationPassword] = useState(true);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstValidationRepeatPassword, setFirstValidationRepeatPassword] =
    useState(true);
  const [conditions, setConditions] = useState(false);
  const [wrongBorderMail, setWrongBorderMail] = useState(false);
  const [wrongBorderName, setWrongBorderName] = useState(false);
  const [wrongBorderUser, setWrongBorderUser] = useState(false);
  const [wrongBorderPassword, setWrongBorderPassword] = useState(false);
  const [wrongBorderrepeatPassword, setWrongBorderrepeatPassword] =
    useState(false);

  const [errorToastRequiredField, setErrorToastRequiredField] = useState(false);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.length < 9) {
      error = "Debe tener al menos 8 caracteres";
    } else if (value.length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim())
    ) {
      error = "Email incorrecto";
    } else {
      error = true;
    }
    return error;
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.trim().length < 3) {
      error = "Debe tener al menos 3 caracteres";
    } else if (value.trim().length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,30}$/i.test(value.trim())) {
      error = "Sólo puede llevar letras";
    } else {
      error = true;
    }
    return error;
  };
  const validateUser = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.trim().length < 3) {
      error = "Debe tener al menos 3 caracteres";
    } else if (value.trim().length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ]{1}$/i.test(value.trim().charAt(0))) {
      error = "El primer caracter debe ser una letra";
    } else if (
      !/^[a-zA-ZÀ-ÿ\s0-9-_]{2,30}$/i.test(
        value.trim().slice(1, value.trim().length)
      )
    ) {
      error = "Sólo guiones como símbolos";
    } else if (!/^[\S]{3,30}$/i.test(value.trim())) {
      error = "No debe llevar espacios ";
    } else {
      error = true;
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.length < 8) {
      error = "Debe tener al menos 8 caracteres";
    } else if (value.length > 30) {
      error = "Debe tener menos de 31 caracteres";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,30}$/i.test(
        value
      )
    ) {
      error =
        "Debe llevar al menos una mayúscula, un caracter especial y un dígito";
    } else {
      error = true;
    }
    return error;
  };
  const validateRepeatPassword = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (repeatPassword !== password) {
      error = "Las contraseñas deben coincidir";
    } else {
      error = true;
    }
    return error;
  };

  const wrongMail = () => {
    let border = "outline-input";
    if (wrongBorderMail) {
      border = "outline-input wrong-border";
    } else {
      border = "outline-input";
    }
    return border;
  };
  const wrongName = () => {
    let border = "outline-input";
    if (wrongBorderName) {
      border = "outline-input wrong-border";
    } else {
      border = "outline-input";
    }
    return border;
  };
  const wrongUser = () => {
    let border = "outline-input";
    if (wrongBorderUser) {
      border = "outline-input wrong-border";
    } else {
      border = "outline-input";
    }
    return border;
  };
  const wrongPassword = () => {
    let border = "outline-input";
    if (wrongBorderPassword) {
      border = "outline-input wrong-border";
    } else {
      border = "outline-input";
    }
    return border;
  };
  const wrongRepeatPassword = () => {
    let border = "outline-input";
    if (wrongBorderrepeatPassword) {
      border = "outline-input wrong-border";
    } else {
      border = "outline-input";
    }
    return border;
  };
  useEffect(() => {
    if (validateEmail(mails) === true) {
      setWrongBorderMail(false);
    }
    if (validateName(name) === true) {
      setWrongBorderName(false);
    }
    if (validateUser(user) === true) {
      setWrongBorderUser(false);
    }
    if (validatePassword(password) === true) {
      setWrongBorderPassword(false);
    }
    if (validateRepeatPassword(repeatPassword) === true) {
      setWrongBorderrepeatPassword(false);
    }

    if (
      validateEmail(mails) === true &&
      validateName(name) === true &&
      validateUser(user) === true &&
      validatePassword(password) === true &&
      validateRepeatPassword(repeatPassword) === true
    ) {
      setErrorToastRequiredField(false);
    }
  }, [
    validateEmail(mails),
    validateName(name),
    validateUser(user),
    validatePassword(password),
    validateRepeatPassword(repeatPassword),
  ]);

  const wrongBordersFunction = () => {
    if (validateEmail(mails) !== true) {
      setWrongBorderMail(true);

      setFirstValidationMail(false);
    }
    if (validateName(name) !== true) {
      setFirstValidationName(false);

      setWrongBorderName(true);
    }
    if (validateUser(user) !== true) {
      setFirstValidationUser(false);

      setWrongBorderUser(true);
    }
    if (validatePassword(password) !== true) {
      setFirstValidationPassword(false);

      setWrongBorderPassword(true);
    }
    if (validateRepeatPassword(repeatPassword) !== true) {
      setFirstValidationRepeatPassword(false);

      setWrongBorderrepeatPassword(true);
    }
  };

  return (
    <>
      <Modal centered show={showRegister} onHide={handleCloseRegister}>
        <Modal.Body className="modal-background">
          <Modal.Header className="border-0 modal-titles" closeButton>
            <div></div>
            <Modal.Title className="fs-2">Registro</Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId="nameRegister"
            >
              <Form.Label></Form.Label>
              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faUser}
                  />
                </InputGroup.Text>
                <Form.Control
                  maxLength={31}
                  value={name}
                  autoComplete="off"
                  onInput={(e) => setName(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      setFirstValidationName(false);
                    }, 200);
                  }}
                  type="text"
                  placeholder="Nombre"
                  className={wrongName()}
                />
              </InputGroup>
              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                {validateName(name) && !firstValidationName && (
                  <Form.Text className="wrong ">{validateName(name)}</Form.Text>
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId="UserRegister"
            >
              <Form.Label></Form.Label>
              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faUser}
                  />
                </InputGroup.Text>
                <Form.Control
                  maxLength={31}
                  value={user}
                  autoComplete="off"
                  onInput={(e) => setUser(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      setFirstValidationUser(false);
                    }, 200);
                  }}
                  type="text"
                  placeholder="Nombre de usuario"
                  className={wrongUser()}
                />
              </InputGroup>
              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                {validateUser(user) && !firstValidationUser && (
                  <Form.Text className="wrong ">{validateUser(user)}</Form.Text>
                )}
              </div>
            </Form.Group>

            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId=",ailRegister"
            >
              <Form.Label></Form.Label>
              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faEnvelope}
                  />
                </InputGroup.Text>
                <Form.Control
                  maxLength={31}
                  value={mails}
                  autoComplete="off"
                  name="email"
                  onInput={(e) => setMails(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      setFirstValidationMail(false);
                    }, 200);
                  }}
                  type="mail"
                  placeholder="Email"
                  className={wrongMail()}
                />
              </InputGroup>
              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                {validateEmail(mails) !== true && !firstValidationMail && (
                  <Form.Text className="wrong ">
                    {validateEmail(mails)}
                  </Form.Text>
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-2 d-flex flex-column align-items-start"
              controlId="passwordRegister"
            >
              <Form.Label></Form.Label>

              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                <Form.Control
                  maxLength={31}
                  value={password}
                  autoComplete="off"
                  onInput={(e) => setPassword(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      setFirstValidationPassword(false);
                    }, 200);
                  }}
                  type="password"
                  className={wrongPassword()}
                  placeholder="Contraseña"
                />
              </InputGroup>

              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                {validatePassword(password) && !firstValidationPassword && (
                  <Form.Text className="wrong ">
                    {validatePassword(password)}
                  </Form.Text>
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-column align-items-start"
              controlId="repeatPasswordRegister"
            >
              <Form.Label></Form.Label>
              <InputGroup className="">
                <InputGroup.Text className="color-login">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>
                <Form.Control
                  maxLength={31}
                  value={repeatPassword}
                  autoComplete="off"
                  onInput={(e) => setRepeatPassword(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      setFirstValidationRepeatPassword(false);
                    }, 200);
                  }}
                  type="password"
                  className={wrongRepeatPassword()}
                  placeholder="Repita contraseña"
                />
              </InputGroup>

              <div className="d-flex ">
                <InputGroup.Text className="color-login opacity-0 height-invisible ">
                  <FontAwesomeIcon
                    style={{ fontSize: "1em", color: "#fd841f" }}
                    icon={faLock}
                  />
                </InputGroup.Text>

                {validateRepeatPassword(repeatPassword) &&
                  !firstValidationRepeatPassword && (
                    <Form.Text className="wrong ">
                      {validateRepeatPassword(repeatPassword)}
                    </Form.Text>
                  )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-column align-items-center"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Acepto los terminos y condiciones."
                onClick={(e) => {
                  if (!conditions) {
                    setConditions(true);
                  } else {
                    setConditions(false);
                  }
                }}
              />
            </Form.Group>
            <Button
              onClick={(e) => {
                e.preventDefault();

                if (
                  validateEmail(mails) === true &&
                  validateName(name) === true &&
                  validateUser(user) === true &&
                  validatePassword(password) === true &&
                  validateRepeatPassword(repeatPassword) === true
                ) {
                  if (conditions) {
                    saveUser();
                  } else {
                    toastError("acepte los terminos y condiciones");
                  }
                } else {
                  wrongBordersFunction();

                  errorToastRequiredField &&
                    toastError(
                      "Debe completar correctamente todos los campos obligatorios"
                    );
                  setErrorToastRequiredField(true);
                }
              }}
              className=" btn-color fs-5"
              type="submit"
            >
              Regístrate
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalRegister;
