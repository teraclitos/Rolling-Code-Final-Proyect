import React, { useState, useEffect } from "react";
import ArticleDetail from "./ArticleDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

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
  logout,
}) => {
  const params = useParams();
  const navigation = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://backend-news-eight.vercel.app/news/news/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          setData(json);
        } else {
          logout();
          navigation("/");
        }
      })
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
