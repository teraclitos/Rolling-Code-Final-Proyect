import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../styles/navbar.css";
import "../styles/articlepublicitygrid.css";
const ModalRegister = ({ showRegister, setShowRegister }) => {
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
  useState(false);
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim())
    ) {
      error = "Email incorrecto";
    } else {
      error = true;
      // setWrongBorderMail(false);
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
      error = "Debe tener menos de 30 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,30}$/i.test(value.trim())) {
      error = "Sólo puede llevar letras";
    } else {
      error = true;
      // setWrongBorderName(false);
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
      error = "Debe tener menos de 30 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ]{1}$/i.test(value.trim().charAt(0))) {
      error = "El primer caracter debe ser una letra";
    } else if (
      !/^[a-zA-ZÀ-ÿ\s0-9-_]{3,30}$/i.test(
        value.trim().slice(1, value.trim().length)
      )
    ) {
      error = "Sólo guiones como símbolos";
    } else if (!/^[\S]{3,30}$/i.test(value.trim())) {
      error = "No debe llevar espacios ";
    } else {
      error = true;
      // setWrongBorderUser(false);
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.length < 9) {
      error = "Debe tener al menos 8 caracteres";
    } else if (value.length > 30) {
      error = "Debe tener menos de 30 caracteres";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,30}$/i.test(
        value
      )
    ) {
      error =
        "Debe llevar al menos una mayúscula, un caracter especial y un dígito";
    } else {
      error = true;
      // setWrongBorderPassword(false);
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
      // setWrongBorderrepeatPassword(false);
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
  }, [
    validateEmail(mails),
    validateName(name),
    validateUser(user),
    validatePassword(password),
    validateRepeatPassword(repeatPassword),
  ]);
  return (
    <Modal centered show={showRegister} onHide={handleCloseRegister}>
      <Modal.Header
        className="border-0 modal-background modal-titles"
        closeButton
      >
        <div></div>
        <Modal.Title className="">Regístrate</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-background">
        <Form>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              value={name}
              autoComplete="off"
              onInput={(e) => setName(e.target.value)}
              onBlur={() => setFirstValidationName(false)}
              type="text"
              placeholder="Francisco Terán"
              className={wrongName()}
            />
            {validateName(name) && !firstValidationName && (
              <Form.Text className="wrong ">{validateName(name)}</Form.Text>
            )}
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              value={user}
              autoComplete="off"
              onInput={(e) => setUser(e.target.value)}
              onBlur={() => setFirstValidationUser(false)}
              type="text"
              placeholder=""
              className={wrongUser()}
            />
            {validateUser(user) && !firstValidationUser && (
              <Form.Text className="wrong ">{validateUser(user)}</Form.Text>
            )}
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicPassword"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={mails}
              autoComplete="off"
              name="email"
              onInput={(e) => setMails(e.target.value)}
              onBlur={() => setFirstValidationMail(false)}
              type="mail"
              placeholder="fran@gmail.com"
              className={wrongMail()}
            />
            {validateEmail(mails) !== true && !firstValidationMail && (
              <Form.Text className="wrong ">{validateEmail(mails)}</Form.Text>
            )}
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicPassword"
          >
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              value={password}
              autoComplete="off"
              onInput={(e) => setPassword(e.target.value)}
              onBlur={() => setFirstValidationPassword(false)}
              type="password"
              className={wrongPassword()}
            />
            {validatePassword(password) && !firstValidationPassword && (
              <Form.Text className="wrong ">
                {validatePassword(password)}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicPassword"
          >
            <Form.Label>Repita contraseña</Form.Label>
            <Form.Control
              value={repeatPassword}
              autoComplete="off"
              onInput={(e) => setRepeatPassword(e.target.value)}
              onBlur={() => setFirstValidationRepeatPassword(false)}
              type="password"
              className={wrongRepeatPassword()}
            />
            {validateRepeatPassword(repeatPassword) &&
              !firstValidationRepeatPassword && (
                <Form.Text className="wrong ">
                  {validateRepeatPassword(repeatPassword)}
                </Form.Text>
              )}
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
                  alert("se ha registrado correctamente");
                  e.submit();
                } else {
                  alert("acepte los terminos y condiciones");
                }
              } else {
                alert("debe completar correctamente todos los campos");
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
              }
            }}
            className="mt-3 btn-color"
            type="submit"
          >
            Regístrate
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-background border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalRegister;
