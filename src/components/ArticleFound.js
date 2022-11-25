import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ArticleFound = ({ data }) => {
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState("");

  let handleChange = (e) => {
    setSearch(e.target.value);
    console.log(setSearch);
    filterArticle(e.target.value);
    console.log(data);
  };

  const filterArticle = (terminoBusqueda) => {
    var resultadoBusqueda = data.filter((elemento) => {
      if (
        elemento.title.toUpperCase().includes(terminoBusqueda.toUpperCase())
      ) {
        return elemento;
      }
    });
    setStock(resultadoBusqueda);
    if (terminoBusqueda == "") {
      setStock([]);
    }
  };

  return (
    <div>
      <Form className="m-3">
        <Form.Control
          value={search}
          placeholder="Buscar por nombre o categoría"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
        />{" "}
      </Form>
      <Container>
        Resultados de Búsqueda
        <div className="container grid-articles-publicity mt-5 px-5 px-sm-2 px-md-0 ">
          <div className="grid-articles">
            {stock.map((d, i) => (
              <div className="mb-3  ">
                <Card className=" h-100 card-grid">
                  <Card.Img src={d.image} variant="top" className=" img-card" />
                  <Card.Body className="p-0 ps-1 card-body  ">
                    <h3 className="category-title fs-6 mt-2 mb-0">Fútbol</h3>
                    <Card.Title className="mt-2 mb-0 card-title">
                      {d.title}
                    </Card.Title>
                    <Card.Text className="mt-1 mb-0 text-card-container ">
                      <p className="text-card">{d.description}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white card-footer ">
                    <Link to={`/ArticleDetailContainer/${d.id}`}>
                      <Button className="py-1 px-2 btn-color ">Leer más</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
      ;
    </div>
  );
};

export default ArticleFound;
