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
import { Route, Routes } from "react-router-dom";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
const Main = ({
  toastError,
  toastSuccess,
  cart,
  del,
  clear,
  data,
  dataUser,
  auth,
  validate,
  login,
  logout,
  handleShowLogin,
  showLogin,
  setShowLogin,
  totalHighlights,
  add,
  changeData,
  setChangeData,
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
          validate={validate}
          login={login}
          logout={logout}
          handleShowLogin={handleShowLogin}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
        <Routes>
          <Route
            path="/highlights"
            element={
              <Highlights
                toastError={toastError}
                toastSuccess={toastSuccess}
                data={data}
                add={add}
                cart={cart}
                totalHighlights={totalHighlights}
              />
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
                validate={validate}
                login={login}
                logout={logout}
              />
            }
          />
          <Route
            path="/"
            element={
              <Articlepublicitygrid
                data={data}
                add={add}
                cart={cart}
                auth={auth}
                validate={validate}
                login={login}
                logout={logout}
                toastError={toastError}
                totalHighlights={totalHighlights}
                handleShowLogin={handleShowLogin}
              />
            }
          />
          <Route
            path="/contacto"
            element={<Contact toastSuccess={toastSuccess} />}
          />
          <Route
            path="/usertable"
            element={
              <AdminTable
                dataUser={dataUser}
                toastError={toastError}
                toastSuccess={toastSuccess}
              />
            }
          />

          <Route
            path="/category"
            element={
              <CategoryDetail
                data={data}
                add={add}
                cart={cart}
                auth={auth}
                validate={validate}
                login={login}
                logout={logout}
              />
            }
          />

          <Route
            path="/ArticleDetailContainer/:id"
            element={
              <ArticleDetailContainer
                add={add}
                cart={cart}
                auth={auth}
                validate={validate}
                login={login}
                logout={logout}
                toastError={toastError}
                toastSuccess={toastSuccess}
                totalHighlights={totalHighlights}
                dataTotal={data}
                changeData={changeData}
                setChangeData={setChangeData}
              />
            }
          />
          <Route path="/recuperarContraseña" element={<RecoverPass />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
