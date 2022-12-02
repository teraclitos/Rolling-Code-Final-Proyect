import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ArticleDetailContainer = ({ add, cart, auth, totalData }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  console.log("params" + params);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://backend-news-eight.vercel.app/news/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ArticleDetail
          totalData={totalData}
          add={add}
          auth={auth}
          data={data}
          cart={cart}
        />
      )}
    </>
  );
};

export default ArticleDetailContainer;
