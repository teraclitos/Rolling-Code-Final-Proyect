import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const ArticleFound = ({ data }) => {
  let [search, setSearch] = useState("");
  let [found, setFound] = useState([]);

  let handleChange = (e) => {
    setSearch(e.target.value);
    console.log("Busqueda:" + e.target.value);
    const hallados = filterArticle(e.target.value);
    <Container>
      {hallados.map((f, i) => {
        <Row>
          <Col>{f.title}</Col>
          <Col>{f.price}</Col>
        </Row>;
      })}
    </Container>;
  };

  let filterArticle = (entrada) => {
    let encontrados = [];
    data.forEach((element) => {
      // console.log("entro");
      // console.log("Titulo" + element.title);
      // console.log("Search:" + entrada);
      console.log("array found al principio:" + found);
      if (element.title.toUpperCase().includes(entrada.toUpperCase())) {
        // setFound([...found, element]);
        encontrados = encontrados.push(element);
        console.log("Hay coincidencias: " + element.title + " = " + entrada);
        console.log("array found al final:" + found);
      }
    });
    return encontrados;
  };
  return (
    <div>
      Resultados de Búsqueda
      <Form className="d-flex d-xl-none d-lg-none">
        <Form.Control
          type="search"
          value={search}
          placeholder="Buscar por nombre o categoría"
          className="me-2"
          aria-label="Search"
          // onInput={(e) => setSearch(e.target.value)}
          onChange={handleChange}
        />{" "}
        <Link to="/articlefound" style={{ textDecoration: "none" }}>
          <Button variant="outline-light">
            {" "}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white mx-2"
            />
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default ArticleFound;