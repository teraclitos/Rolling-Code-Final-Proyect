import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Highlights from "./Highlights";
const ArticleDetailContainer = ({ add, cart, auth }) => {
  const params = useParams();
  console.log("params" + params);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${params.id}`)
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);
  useEffect(() => {
    fetch(`https://backend-news-b7li2s1zo-andreahongn.vercel.app/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [params.id]);

  return (
    <div>
      <ArticleDetail data={data} add={add} cart={cart} auth={auth} />;
    </div>
  );
};

export default ArticleDetailContainer;
