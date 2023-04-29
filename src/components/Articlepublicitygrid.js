import { React, useEffect } from "react";
import "../styles/allcss.css";
import Categorias from "../components/Categorias";
import Slider from "./Slider";
import Advertising from "./Advertising";
import Header from "../components/Header";
import AsideAdvertisement from "./AsideAdvertisement";
import ArticleCard from "./ArticleCard";
import PaginationNew from "./PaginationNew";

import LoaderPage from "./LoaderPage";
import { useNavigate } from "react-router-dom";

const Articlepublicitygrid = ({
  data,
  add,
  cart,
  setCart,
  auth,
  toastError,
  totalHighlights,
  handleShowLogin,
  d,
  setIsLoading,
  isLoading,
  del,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavorite,
  setModifyFavorite,
  modifyFavoriteFetch,
  page,
  setPage,
  totalPages,
  setIsLoadingHighlight,
  logout,
}) => {
  const titleDoc = (document.title = `LA ROLLINGNETA `);
  const navigation = useNavigate();
  useEffect(() => {
    if (auth.user) {
      fetch(`https://backend-news-eight.vercel.app/users/control`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: auth.token,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.error) {
            logout();
            navigation("/");
          }
        });
    }
  }, []);

  return (
    <>
      {auth.role !== "admin" && <Advertising navigation={navigation} />}
      <Header />

      {totalHighlights.length > 0 && (
        <Slider
          totalHighlights={totalHighlights}
          cart={cart}
          d={d}
          add={add}
          auth={auth}
          toastError={toastError}
          handleShowLogin={handleShowLogin}
          setIsLoading={setIsLoading}
        />
      )}
      <div>
        <Categorias
          auth={auth}
          setIsLoading={setIsLoading}
          handleShowLogin={handleShowLogin}
        />
      </div>

      <div
        className={
          auth.role === "admin"
            ? "container grid-articles-publicity grid-articles-publicity-admin  mt-5  mb-5 "
            : "container grid-articles-publicity mt-5  mb-5  "
        }
      >
        {isLoading ? (
          <LoaderPage />
        ) : (
          <div className="grid-articles">
            {data.map((d, i) => (
              <div key={"mainnotice" + i} className="mb-3  ">
                <ArticleCard
                  cart={cart}
                  d={d}
                  add={add}
                  del={del}
                  auth={auth}
                  toastError={toastError}
                  handleShowLogin={handleShowLogin}
                  setIsLoading={setIsLoading}
                  setCart={setCart}
                  deleteFavorite={deleteFavorite}
                  setDeleteFavorite={setDeleteFavorite}
                  modifyFavorite={modifyFavorite}
                  setModifyFavorite={setModifyFavorite}
                  modifyFavoriteFetch={modifyFavoriteFetch}
                />
              </div>
            ))}
          </div>
        )}

        {auth.role !== "admin" && (
          <div className="grid-publicity d-none d-lg-grid ">
            <aside className="carousel-advertisement-container">
              <AsideAdvertisement navigation={navigation} />
            </aside>
          </div>
        )}

        {totalPages > 1 && (
          <div className="d-flex justify-content-center px-3">
            <PaginationNew
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              setIsLoading={setIsLoading}
              setIsLoadingHighlight={setIsLoadingHighlight}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Articlepublicitygrid;
