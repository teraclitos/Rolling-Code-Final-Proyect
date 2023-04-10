import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [changeData, setChangeData] = useState(1);

  const editButtom = document.getElementById("edit-buttom");
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/news/news")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [changeData]);

  const handleShowLogin = () => setShowLogin(true);
  const [showLogin, setShowLogin] = useState(false);
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
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const login = (u, r) => {
    setAuth({ user: u, role: r });
    console.log(auth);
  };

  const logout = () => {
    setAuth({ user: "", role: "" });
    console.log("seteo logout auth user" + auth.user);
    console.log("seteo logout auth role" + auth.role);
    toastSuccess("Sesión cerrada correctamente");
    localStorage.setItem("token", JSON.stringify(""));
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
        auth={auth}
        login={login}
        logout={logout}
        handleShowLogin={handleShowLogin}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        totalHighlights={totalHighlights}
        changeData={changeData}
        setChangeData={setChangeData}
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
