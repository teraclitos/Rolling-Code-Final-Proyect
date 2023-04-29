import { React, useEffect, useState } from "react";
import "../styles/allcss.css";
import ArticleCard from "./ArticleCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const CategoryDetail = ({
  add,
  cart,
  auth,
  setIsLoading,
  logout,
  isLoading,
  del,
  handleShowLogin,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavorite,
  setModifyFavorite,
  modifyFavoriteFetch,
}) => {
  const params = useParams();
  const navigation = useNavigate();
  const [dataCategory, setDataCategory] = useState([]);
  const titleDoc =
    (document.title = `LA ROLLINGNETA | ${params.category.replace("-", " ")}`);

  useEffect(() => {
    fetch(
      `https://backend-news-eight.vercel.app/news/category/${params.category}`,
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
          console.log(json);
          setDataCategory(json);
        } else {
          logout();
          navigation("/");
        }
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="mb-5">
          <h2 className="title-category">
            {params.category.replace("-", " ")}
          </h2>
          <Row>
            {dataCategory.map((d, i) => (
              <Col key={d.category + i} className="col-12 col-lg-6 mb-5">
                <ArticleCard
                  cart={cart}
                  d={d}
                  add={add}
                  del={del}
                  auth={auth}
                  handleShowLogin={handleShowLogin}
                  setIsLoading={setIsLoading}
                  deleteFavorite={deleteFavorite}
                  setDeleteFavorite={setDeleteFavorite}
                  modifyFavorite={modifyFavorite}
                  setModifyFavorite={setModifyFavorite}
                  modifyFavoriteFetch={modifyFavoriteFetch}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default CategoryDetail;
