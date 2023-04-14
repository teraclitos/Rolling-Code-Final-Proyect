import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ArticleDetailContainer = ({
  add,
  del,
  cart,
  auth,
  totalHighlights,
  toastError,
  toastSuccess,
  dataTotal,
  changeData,
  setChangeData,
  isLoading,
  setIsLoading,
  setDeleteFavorite,
  setModifyFavorite,
  deleteFavorite,
  modifyFavorite,
  modifyFavoriteFetch,
}) => {
  const params = useParams();

  console.log("params" + params);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://backend-news-eight.vercel.app/news/news/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, [dataTotal]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ArticleDetail
          add={add}
          del={del}
          auth={auth}
          data={data}
          cart={cart}
          toastSuccess={toastSuccess}
          toastError={toastError}
          totalHighlights={totalHighlights}
          dataTotal={dataTotal}
          changeData={changeData}
          setChangeData={setChangeData}
          setDeleteFavorite={setDeleteFavorite}
          setModifyFavorite={setModifyFavorite}
          deleteFavorite={deleteFavorite}
          modifyFavorite={modifyFavorite}
          modifyFavoriteFetch={modifyFavoriteFetch}
        />
      )}
    </>
  );
};

export default ArticleDetailContainer;
