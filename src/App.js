import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/news/news")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [data]);

  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/users/verusuarios")
      .then((res) => res.json())
      .then((json) => setDataUser(json));
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
    <BrowserRouter>
      <Main
        toastError={toastError}
        toastSuccess={toastSuccess}
        cart={cart}
        del={del}
        add={add}
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
        totalHighlights={totalHighlights}
      />
      <ToastContainer
        transition={Flip}
        theme="colored"
        hideProgressBar={true}
        autoClose={2000}
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  );
}

export default App;
