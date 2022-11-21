import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Highlights from "./Highlights";
const ArticleDetailContainer = ({ add }) => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <ArticleDetail data={data} add={add} />;
    </div>
  );
};

export default ArticleDetailContainer;
