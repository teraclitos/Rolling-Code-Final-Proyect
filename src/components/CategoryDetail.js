import { React, useState, useEffect } from "react";
import "../styles/allcss.css";
import ArticleCard from "./ArticleCard";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CategoryDetail = ({ data, add, cart, auth }) => {
  const [category, setCategory] = useState("Basquet");
  const [dataFilter, setDataFilter] = useState([]);

  const categories = () => {
    const localSTGCategories =
      JSON.parse(localStorage.getItem("category")) || {};

    if (localSTGCategories.id === 1) {
      setCategory("Mundial");
    } else if (localSTGCategories.id === 2) {
      setCategory("Liga Argentina");
    } else if (localSTGCategories.id === 3) {
      setCategory("Tenis");
    } else {
      setCategory("Basquet");
    }
  };

  const dataFilterFunction = () => {
    setDataFilter(data.filter((element) => element.category === category));

    const newData = dataFilter;

    return newData;
  };

  useEffect(() => {
    categories();
    dataFilterFunction();
  }, [data, category]);

  return (
    <div>
      <Container className="mb-5">
        <h2 className="title-category">{category}</h2>
        <Row>
          {dataFilter.map((d, i) => (
            <Col className="col-12 col-lg-6 mb-5">
              <ArticleCard cart={cart} d={d} add={add} auth={auth} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryDetail;
