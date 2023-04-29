import React, { useState, useEffect } from "react";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

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
  logout,
}) => {
  const titleDoc = (document.title = "LA ROLLINGNETA | Buscador");
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigate();

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
      .then((json) => {
        if (!json.error) {
          setStock(json);
        } else {
          logout();
          navigation("/");
        }
      })
      .finally(() => setIsLoading(false));
  }, [search, newLoad]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-vh-100 ">
          <div className="body-found">
            <Container>
              <h2 className=" my-5 fs-2 title-searcher">
                Buscar por nombre o categoría o descripción
              </h2>
              <Form className="my-5">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="color-span">
                    <FontAwesomeIcon
                      style={{ fontSize: "2em", color: "#1986a0" }}
                      icon={faMagnifyingGlass}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    autoFocus
                    value={search}
                    className="me-2"
                    aria-label="Search"
                    onInput={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Form>
            </Container>

            <Container className="d-flex justify-content-center align-items-center ">
              {stock.length === 0 ? (
                <h2 className="no-result d-flex align-items-center justify-content-center">
                  No hay resultados
                </h2>
              ) : (
                <Row className="my-4" lg={4}>
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
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleFound;
