import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";
import { useParams } from "react-router-dom";

const ArticleDetailContainer = ({ add, cart, auth, totalData }) => {
  const params = useParams();
  console.log("params" + params);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${params.id}`)
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);

  useEffect(() => {
    fetch(`https://backend-news-eight.vercel.app/news/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <ArticleDetail
        totalData={totalData}
        data={data}
        add={add}
        cart={cart}
        auth={auth}
      />
      ;
    </div>
  );
};

export default ArticleDetailContainer;
