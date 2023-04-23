import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Articlepublicitygrid from "../components/Articlepublicitygrid";
import AdminTable from "../components/AdminTable";
import CategoryDetail from "../components/CategoryDetail";
import Contact from "../components/Contact";
import ArticleDetailContainer from "../components/ArticleDetailContainer";
import Highlights from "../components/Highlights";
import ArticleFound from "../components/ArticleFound";
import RecoverPass from "../components/RecoverPass";
import Error404 from "../components/Error404";
import Loader from "../components/Loader";
import CreateNew from "../components/CreateNew";

import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
const Main = ({
  toastError,
  toastSuccess,
  cart,
  setCart,
  del,
  clear,
  data,
  dataUser,
  auth,
  login,
  logout,
  handleShowLogin,
  showLogin,
  setShowLogin,
  totalHighlights,
  add,
  changeData,
  setChangeData,
  setAuth,
  isLoading,
  setIsLoading,
  deleteFavorite,
  setDeleteFavorite,
  modifyFavorite,
  setModifyFavorite,
  modifyFavoriteFetch,
  loadFavorite,
  setLoadFavorite,
  newLoad,
  setNewLoad,
  category,
  setCategory,
  setIsLoadingHighlight,
  isLoadingHighlight,
  setIsLoadingHighlightPage,
  isLoadingHighlightPage,
  page,
  setPage,
  totalPages,
  pageH,
  setPageH,
  totalPagesH,
}) => {
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Navbar
          toastError={toastError}
          toastSuccess={toastSuccess}
          cart={cart}
          del={del}
          clear={clear}
          data={data}
          dataUser={dataUser}
          auth={auth}
          setAuth={setAuth}
          login={login}
          logout={logout}
          handleShowLogin={handleShowLogin}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          deleteFavorite={deleteFavorite}
          setDeleteFavorite={setDeleteFavorite}
          modifyFavoriteFetch={modifyFavoriteFetch}
          loadFavorite={loadFavorite}
          setLoadFavorite={setLoadFavorite}
          newLoad={newLoad}
          setNewLoad={setNewLoad}
          setCategory={setCategory}
          setIsLoadingHighlight={setIsLoadingHighlight}
        />
        <Routes>
          <Route
            path="/highlights"
            element={
              <>
                {isLoadingHighlight ? (
                  <Loader />
                ) : (
                  <Highlights
                    toastError={toastError}
                    toastSuccess={toastSuccess}
                    data={data}
                    add={add}
                    cart={cart}
                    totalHighlights={totalHighlights}
                    pageH={pageH}
                    setPageH={setPageH}
                    totalPagesH={totalPagesH}
                    isLoadingHighlightPage={isLoadingHighlightPage}
                    setIsLoadingHighlightPage={setIsLoadingHighlightPage}
                    logout={logout}
                    auth={auth}
                  />
                )}
              </>
            }
          />
          <Route
            path="/articlefound"
            element={
              <ArticleFound
                data={data}
                add={add}
                cart={cart}
                auth={auth}
                login={login}
                logout={logout}
                del={del}
                handleShowLogin={handleShowLogin}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                deleteFavorite={deleteFavorite}
                setDeleteFavorite={setDeleteFavorite}
                modifyFavorite={modifyFavorite}
                setModifyFavorite={setModifyFavorite}
                modifyFavoriteFetch={modifyFavoriteFetch}
                newLoad={newLoad}
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                {isLoading && isLoadingHighlight ? (
                  <Loader />
                ) : (
                  <Articlepublicitygrid
                    data={data}
                    add={add}
                    del={del}
                    cart={cart}
                    setCart={setCart}
                    auth={auth}
                    login={login}
                    logout={logout}
                    toastError={toastError}
                    totalHighlights={totalHighlights}
                    handleShowLogin={handleShowLogin}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    deleteFavorite={deleteFavorite}
                    setDeleteFavorite={setDeleteFavorite}
                    modifyFavorite={modifyFavorite}
                    setModifyFavorite={setModifyFavorite}
                    modifyFavoriteFetch={modifyFavoriteFetch}
                    category={category}
                    setCategory={setCategory}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    setIsLoadingHighlight={setIsLoadingHighlight}
                  />
                )}
              </>
            }
          />
          <Route
            path="/contacto"
            element={<Contact toastSuccess={toastSuccess} />}
          />
          <Route
            path="/usertable"
            element={
              auth.role === "admin" && (
                <AdminTable
                  dataUser={dataUser}
                  toastError={toastError}
                  toastSuccess={toastSuccess}
                  auth={auth}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  newLoad={newLoad}
                  setNewLoad={setNewLoad}
                  logout={logout}
                />
              )
            }
          />
          <Route
            path="/CreateNew"
            element={
              auth.role === "admin" && (
                <CreateNew
                  dataUser={dataUser}
                  toastError={toastError}
                  toastSuccess={toastSuccess}
                  auth={auth}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  newLoad={newLoad}
                  setNewLoad={setNewLoad}
                  logout={logout}
                />
              )
            }
          />
          <Route
            path={`/category/:category`}
            element={
              <CategoryDetail
                data={data}
                add={add}
                cart={cart}
                auth={auth}
                login={login}
                logout={logout}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                del={del}
                handleShowLogin={handleShowLogin}
                deleteFavorite={deleteFavorite}
                setDeleteFavorite={setDeleteFavorite}
                modifyFavorite={modifyFavorite}
                setModifyFavorite={setModifyFavorite}
                modifyFavoriteFetch={modifyFavoriteFetch}
              />
            }
          />

          <Route
            path="/ArticleDetailContainer/:id"
            element={
              <ArticleDetailContainer
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                add={add}
                del={del}
                cart={cart}
                auth={auth}
                login={login}
                logout={logout}
                toastError={toastError}
                toastSuccess={toastSuccess}
                totalHighlights={totalHighlights}
                dataTotal={data}
                changeData={changeData}
                setChangeData={setChangeData}
                setDeleteFavorite={setDeleteFavorite}
                setModifyFavorite={setModifyFavorite}
                deleteFavorite={deleteFavorite}
                modifyFavorite={modifyFavorite}
                modifyFavoriteFetch={modifyFavoriteFetch}
              />
            }
          />
          <Route path="/recuperarContraseña" element={<RecoverPass />} />
          <Route
            path="*"
            element={
              <Error404
                setIsLoading={setIsLoading}
                setNewLoad={setNewLoad}
                newLoad={newLoad}
                setIsLoadingHighlight={setIsLoadingHighlight}
              />
            }
          />
        </Routes>
        <Footer
          setNewLoad={setNewLoad}
          newLoad={newLoad}
          setIsLoading={setIsLoading}
          setIsLoadingHighlight={setIsLoadingHighlight}
        />
      </Container>
    </>
  );
};

export default Main;
