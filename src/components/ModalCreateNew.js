import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Modal, Form } from "react-bootstrap";

const ModalCreateNew = ({
  showNew,
  setShowNew,
  handleShowNew,
  handleCloseNew,
}) => {
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
              //   onChange={(e) => setEditSection(e.target.value)}
            >
              {/* <option value={editSection}>{editSection}</option>
              {editSection !== "Mundial" && (
                <option value="Mundial">Mundial</option>
              )}
              {editSection !== "Liga Argentina" && (
                <option value="Liga Argentina">Liga Argentina</option>
              )}
              {editSection !== "Tenis" && <option value="Tenis">Tenis</option>}
              {editSection !== "Basquet" && (
                <option value="Basquet">Basquet</option>
              )} */}
            </Form.Select>

            <Form.Group />

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Autor</Form.Label>
              <Form.Control
                maxLength={31}
                type="text"
                placeholder="Nombre del autor"
                // value={editAuthor}
                // onInput={(e) => setEditAuthor(e.target.value)}
                // className={
                //   validateField(editAuthor) !== true
                //     ? "outline-input wrong-border"
                //     : "outline-input "
                // }
                // autoFocus
              />
              <Form.Text className="wrong text-start ps-3 ">
                {/* {validateField(editAuthor)} */}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Titulo</Form.Label>
              <Form.Control
                maxLength={31}
                type="text"
                // defaultValue={editTitle}
                // value={editTitle}
                // onChange={(e) => setEditTitle(e.target.value)}
                // className={
                //   validateField(editTitle) !== true
                //     ? "outline-input wrong-border"
                //     : "outline-input "
                // }
              />
              <Form.Text className="wrong text-start ps-3 ">
                {/* {validateField(editTitle)} */}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 group-container-crud">
              <Form.Label className="style-crud">URL</Form.Label>
              <Form.Control
                maxLength={200}
                type="text"
                placeholder="Ingrese URL de imagen"
                // defaultValue={editImage}
                // value={editImage}
                // onChange={(e) => setEditImage(e.target.value)}
                // className={
                //   validateField(editImage) !== true
                //     ? "outline-input wrong-border"
                //     : "outline-input "
                // }
              />
              <Form.Text className="wrong text-start ps-3 ">
                {/* {validateField(editImage)} */}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Subtitulo</Form.Label>
              <Form.Control
                maxLength={200}
                type="text"
                placeholder="Ingrese subtitulo"
                // defaultValue={editSubtitulo}
                // value={editSubtitulo}
                // onInput={(e) => setEditSubtitulo(e.target.value)}
                // className={
                //   validateField(editSubtitulo) !== true
                //     ? "outline-input wrong-border"
                //     : "outline-input "
                // }
              />
              <Form.Text className="wrong text-start ps-3 ">
                {/* {validateField(editSubtitulo)} */}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 group-container-crud"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="style-crud">Descripcion</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder=""
                // defaultValue={editDescription}
                // value={editDescription}
                // onInput={(e) => setEditDescription(e.target.value)}
                // className={
                //   validateField(editDescription) !== true
                //     ? "outline-input wrong-border text-area-description-input"
                //     : "outline-input text-area-description-input"
                // }
              />
              <Form.Text className="wrong text-start ps-3 ">
                {/* {validateField(editDescription)} */}
              </Form.Text>
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

              //   onClick={() => {
              //     addHighlight();
              //   }}
              //   checked={editHighlight}
            />
          </Form.Group>
          <Form.Group className="">
            <Button
              id="edit-Buttom"
              className="btn-detail"
              //   onClick={(e) => {
              //     if (checkAllFields().length > 0) {
              //       toastError(
              //         "Debe completar correctamente todos los campos obligatorios"
              //       );
              //     } else {
              //       if (highlightFilter() === true) {
              //         handleSubmit(e);

              //         setTimeout(() => {
              //           setChangeData(changeData + 1);
              //         }, 1000);

              //         handleClose();
              //       } else {
              //         toastError("Sólo puede haber tres destacados");
              //       }

              //       setRender(true);
              //     }
              //   }}
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
