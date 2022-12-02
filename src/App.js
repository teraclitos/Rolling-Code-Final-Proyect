import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Articlepublicitygrid from "../src/components/Articlepublicitygrid";
import AdminTable from "../src/components/AdminTable";
import CategoryDetail from "./components/CategoryDetail";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ArticleDetailContainer from "./components/ArticleDetailContainer";
import Highlights from "../src/components/Highlights";
import ArticleFound from "../src/components/ArticleFound";
import Advertising from "./components/Advertising";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecoverPass from "../src/components/RecoverPass";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import Error404 from "./components/Error404";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/news/news")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const handleShowLogin = () => setShowLogin(true);
  const [showLogin, setShowLogin] = useState(false);

  //carrito de mg
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const add = (p) => {
    setCart([...cart, p]);
    console.log("funcion auth" + auth.user);
  };

  const del = (p) => {
    console.log(p);
    setCart(cart.filter((c) => c.id !== p.id));
  };

  const clear = () => {
    setCart([]);
  };

  //Login

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);

  const [auth, setAuth] = useState({
    user: "",
    role: "",
  });

  const USERS = [
    { user: "admin", pass: "admin", role: "admin" },
    { user: "user", pass: "user", role: "user" },
  ];

  const validate = (u, p) => {
    let userOk = true;
    let passOk = false;
    let user = USERS.find((user) => user.user === u);
    user ? (passOk = user.pass === p) : (userOk = false);
    return userOk && passOk;
  };

  const login = (u) => {
    const userFound = USERS.find((user) => user.user === u);
    setAuth({
      user: userFound.user,
      role: userFound.role,
    });
    toastSuccess("👋 Bienvenido! Sesión iniciada correctamente");
  };

  const logout = () => {
    setAuth({ user: "", role: "" });
    toastSuccess("Sesión cerrada correctamente");
  };
  const prevenDuplicateToast = "custom-id-yes";

  const toastError = (writte) => {
    toast.error(writte, {
      toastId: prevenDuplicateToast,
    });
  };
  const toastSuccess = (writte) => {
    toast.success(writte, {
      toastId: prevenDuplicateToast,
    });
  };
  const totalHighlights = data.filter((element) => element.highlight === true);

  return (
    <div>
      <BrowserRouter>
        <Navbar
          toastError={toastError}
          toastSuccess={toastSuccess}
          cart={cart}
          del={del}
          clear={clear}
          data={data}
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
          <Route path="/usertable" element={<AdminTable />} />

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
              />
            }
          />

          {/* <Route
            path="/ArticleDetailContainer/:id"
            element={
              auth.user ? (
                <ArticleDetailContainer
                  add={add}
                  cart={cart}
                  auth={auth}
                  validate={validate}
                  login={login}
                  logout={logout}
                />
              ) : (
                <Articlepublicitygrid
                  data={data}
                  add={add}
                  cart={cart}
                  auth={auth}
                  validate={validate}
                  login={login}
                  logout={logout}
                />
              )
            }
          /> */}
          <Route path="/recuperarContraseña" element={<RecoverPass />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
        <Footer />
        <ToastContainer
          transition={Flip}
          theme="colored"
          hideProgressBar={true}
          autoClose={2000}
          pauseOnFocusLoss={false}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
