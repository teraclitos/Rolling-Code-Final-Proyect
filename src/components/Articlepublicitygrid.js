import { React, useEffect } from "react";
import "../styles/allcss.css";
import Categorias from "../components/Categorias";
import Slider from "./Slider";
import Advertising from "./Advertising";
import Header from "../components/Header";
import AsideAdvertisement from "./AsideAdvertisement";
import ArticleCard from "./ArticleCard";
import PaginationNew from "./PaginationNew";
import Loader from "./Loader";
import LoaderPage from "./LoaderPage";

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
}) => {
  return (
    <>
      {auth.role !== "admin" && <Advertising />}
      <Header />
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
      <div>
        <Categorias
          auth={auth}
          setIsLoading={setIsLoading}
          handleShowLogin={handleShowLogin}
        />
      </div>

      <div className="container grid-articles-publicity mt-5  mb-5  ">
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
        <div className="grid-publicity d-none d-lg-grid ">
          <aside className="carousel-advertisement-container">
            <AsideAdvertisement />
          </aside>
        </div>
        <div className="d-flex justify-content-center px-3">
          <PaginationNew
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            setIsLoading={setIsLoading}
            setIsLoadingHighlight={setIsLoadingHighlight}
          />
        </div>
      </div>
    </>
  );
};

export default Articlepublicitygrid;
