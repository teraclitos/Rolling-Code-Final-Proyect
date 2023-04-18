import { React, useEffect, useState } from "react";
import "../styles/allcss.css";
import ArticleCard from "./ArticleCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CategoryDetail = ({
  data,
  add,
  cart,
  auth,
  category,
  setCategory,
  logout,
}) => {
  const params = useParams();
  const navigation = useNavigate();
  const [dataCategory, setDataCategory] = useState([]);

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
      });
    // .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <Container className="mb-5">
        <h2 className="title-category">{params.category}</h2>
        <Row>
          {dataCategory.map((d, i) => (
            <Col key={d.category + i} className="col-12 col-lg-6 mb-5">
              <ArticleCard cart={cart} d={d} add={add} auth={auth} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryDetail;
