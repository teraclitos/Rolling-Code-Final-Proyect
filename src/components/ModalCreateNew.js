import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Modal, Form } from "react-bootstrap";

const ModalCreateNew = ({
  showNew,
  auth,
  handleCloseNew,
  toastError,
  toastSuccess,
  totalHighlights,
  newLoad,
  setNewLoad,
}) => {
  const [editSection, setEditSection] = useState("Mundial");
  const [editAuthor, setEditAuthor] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitulo, setEditSubtitulo] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editHighlight, setEditHighlight] = useState(false);
  const [post, setPost] = useState(null);
  const handlePost = (e) => {
    fetch("https://backend-news-eight.vercel.app/news/load", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
      body: JSON.stringify({
        category: editSection,
        author: editAuthor,
        img_URL: editImage,
        title: editTitle,
        description: editSubtitulo,
        content: editDescription,
        highlight: false,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          setPost(true);
          setNewLoad(newLoad + 1);
          handleCloseNew();
        } else {
          setPost(false);
        }
      })
      .catch((error) => setPost(false));
  };

  useEffect(() => {
    if (post === true) {
      toastSuccess("se ha creado la noticia exitosamente");
    } else if (post === false) {
      toastError("se ha producido un error");
    }
  }, [post]);

  const [touched, setTouched] = useState([false, false, false, false, false]);
  const fields = [
    editAuthor,
    editDescription,
    editImage,
    editSection,
    editSubtitulo,
    editTitle,
  ];

  const checkAllFields = () => {
    const check = fields.map((element) => validateField(element));

    return check.filter((element) => element !== true);
  };
  const highlightFilter = () => {
    if (totalHighlights.length > 2 && editHighlight === true) {
      return false;
    } else {
      return true;
    }
  };
  const addHighlight = () => {
    if (!editHighlight) {
      setEditHighlight(true);
    } else {
      setEditHighlight(false);
    }
  };
  const validateField = (value) => {
    let error;
    if (!value) {
      error = "Campo obligatorio";
    } else if (value.trim().length < 3) {
      error = "Debe tener al menos 3 caracteres";
    } else if (value === editImage) {
      const image = value.trim().split(".")[value.trim().split(".").length - 1];
      if (!(image === "png" || image === "jpg" || image === "jpeg")) {
        error = "La imagen debe ser formato png o jpg o jpeg";
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    return error;
  };
  return (
    <Modal fullscreen={true} show={showNew} onHide={handleCloseNew}>
      <Modal.Header className="card-crud" closeButton>
        <Modal.Title className="title-crud">Crear Noticia</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-crud modal-crud">
        <Form>
          <Form.Group
            className="mb-3 group-container-crud"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="style-crud">Categoria</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setEditSection(e.target.value)}
            >
              <option value={editSection}>{editSection}</option>

              <option value="Liga Argentina">Liga Argentina</option>

              <option value="Tenis">Tenis</option>

              <option value="Basquet">Basquet</option>
            </Form.Select>

            <Form.Group />

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Autor</Form.Label>
              <Form.Control
                onBlur={() => {
                  const touchedI = touched.map((el, i) =>
                    i === 0 ? true : el
                  );
                  setTouched(touchedI);
                }}
                maxLength={31}
                type="text"
                placeholder="Nombre del autor"
                value={editAuthor}
                onInput={(e) => setEditAuthor(e.target.value)}
                className={
                  validateField(editAuthor) !== true && touched[0] === true
                    ? "outline-input wrong-border"
                    : "outline-input "
                }
              />
              {touched[0] === true && (
                <Form.Text className="wrong text-start ps-3 ">
                  {validateField(editAuthor)}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Titulo</Form.Label>
              <Form.Control
                onBlur={() => {
                  const touchedI = touched.map((el, i) =>
                    i === 1 ? true : el
                  );
                  setTouched(touchedI);
                }}
                placeholder="Título"
                maxLength={31}
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className={
                  validateField(editTitle) !== true && touched[1] === true
                    ? "outline-input wrong-border"
                    : "outline-input "
                }
              />
              {touched[1] === true && (
                <Form.Text className="wrong text-start ps-3 ">
                  {validateField(editTitle)}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3 group-container-crud">
              <Form.Label className="style-crud">URL</Form.Label>
              <Form.Control
                onBlur={() => {
                  const touchedI = touched.map((el, i) =>
                    i === 2 ? true : el
                  );
                  setTouched(touchedI);
                }}
                maxLength={200}
                type="text"
                placeholder="Ingrese URL de imagen"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
                className={
                  validateField(editImage) !== true && touched[2] === true
                    ? "outline-input wrong-border"
                    : "outline-input "
                }
              />
              {touched[2] === true && (
                <Form.Text className="wrong text-start ps-3 ">
                  {validateField(editImage)}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Subtitulo</Form.Label>
              <Form.Control
                onBlur={() => {
                  const touchedI = touched.map((el, i) =>
                    i === 3 ? true : el
                  );
                  setTouched(touchedI);
                }}
                maxLength={200}
                type="text"
                placeholder="Ingrese subtitulo"
                value={editSubtitulo}
                onInput={(e) => setEditSubtitulo(e.target.value)}
                className={
                  validateField(editSubtitulo) !== true && touched[3] === true
                    ? "outline-input wrong-border"
                    : "outline-input "
                }
              />
              {touched[3] === true && (
                <Form.Text className="wrong text-start ps-3 ">
                  {validateField(editSubtitulo)}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Descripcion</Form.Label>
              <Form.Control
                onBlur={() => {
                  const touchedI = touched.map((el, i) =>
                    i === 4 ? true : el
                  );
                  setTouched(touchedI);
                }}
                type="text"
                as="textarea"
                placeholder=""
                value={editDescription}
                onInput={(e) => setEditDescription(e.target.value)}
                className={
                  validateField(editDescription) !== true && touched[4] === true
                    ? "outline-input wrong-border text-area-description-input"
                    : "outline-input text-area-description-input"
                }
              />
              {touched[4] === true && (
                <Form.Text className="wrong text-start ps-3 ">
                  {validateField(editDescription)}
                </Form.Text>
              )}
            </Form.Group>
          </Form.Group>
        </Form>

        <Modal.Footer className="card-crud card-crud-footer d-flex  justify-content-center">
          <Button
            className="btn-detail"
            onClick={() => {
              handleCloseNew();
            }}
          >
            Cerrar
          </Button>
          <Form.Group className=" btn-detail ">
            <Form.Check
              type="checkbox"
              label="Destacar"
              onClick={() => {
                addHighlight();
              }}
              checked={editHighlight}
            />
          </Form.Group>
          <Form.Group className="">
            <Button
              id="edit-Buttom"
              className="btn-detail"
              onClick={(e) => {
                setTouched([true, true, true, true, true]);
                if (checkAllFields().length > 0) {
                  toastError(
                    "Debe completar correctamente todos los campos obligatorios"
                  );
                } else {
                  if (highlightFilter() === true) {
                    handlePost(e);
                  } else {
                    toastError("Sólo puede haber tres destacados");
                  }
                }
              }}
            >
              Crear
            </Button>
          </Form.Group>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCreateNew;
