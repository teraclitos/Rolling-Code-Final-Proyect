import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";

const ArticleDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <ArticleDetail data={data} />;
    </div>
  );
};

export default ArticleDetailContainer;
