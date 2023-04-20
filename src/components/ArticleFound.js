import React, { useState, useEffect } from "react";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";

const ArticleFound = ({
  data,
  add,
  cart,
  auth,
  del,
  handleShowLogin,
  isLoading,
  setIsLoading,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavorite,
  setModifyFavorite,
  modifyFavoriteFetch,
  newLoad,
}) => {
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://backend-news-eight.vercel.app/news/search?characters=${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: auth.token,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setStock(json))
      .finally(() => setIsLoading(false));
  }, [search, newLoad]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-vh-100">
          <div className="body-found">
            <Container>
              <Form className="my-5">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="color-span">
                    <FontAwesomeIcon
                      style={{ fontSize: "2em", color: "#1986a0" }}
                      icon={faMagnifyingGlass}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    value={search}
                    placeholder="Buscar por nombre o categoría o descripción"
                    className="me-2"
                    aria-label="Search"
                    onInput={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Form>
            </Container>
            <Container>
              <h3 className="card-title card-title-found mb-5">
                Resultados de Búsqueda
              </h3>

              <Container>
                {stock.length === 0 ? (
                  <h2>No hay resultados</h2>
                ) : (
                  <Row lg={4}>
                    {stock.map((d, i) => (
                      <div key={"search" + i} className="mb-5  ">
                        <ArticleCard
                          cart={cart}
                          d={d}
                          add={add}
                          auth={auth}
                          del={del}
                          handleShowLogin={handleShowLogin}
                          setIsLoading={setIsLoading}
                          deleteFavorite={deleteFavorite}
                          setDeleteFavorite={setDeleteFavorite}
                          modifyFavorite={modifyFavorite}
                          setModifyFavorite={setModifyFavorite}
                          modifyFavoriteFetch={modifyFavoriteFetch}
                        />
                      </div>
                    ))}
                  </Row>
                )}
              </Container>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleFound;
