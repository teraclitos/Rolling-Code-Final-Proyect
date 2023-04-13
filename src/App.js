import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [changeData, setChangeData] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const editButtom = document.getElementById("edit-buttom");
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/news/news")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, [changeData]);

  const handleShowLogin = () => setShowLogin(true);
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const add = (p) => {
    setCart([...cart, p]);
  };
  const del = (p) => {
    setCart(cart.filter((c) => c._id !== p._id));
  };
  const clear = () => {
    setCart([]);
  };

  const [auth, setAuth] = useState({
    user: JSON.parse(localStorage.getItem("username")),
    role: JSON.parse(localStorage.getItem("role")),
    token: JSON.parse(localStorage.getItem("token")),
  });

  const login = () => {
    setAuth({
      user: JSON.parse(localStorage.getItem("username")),
      role: JSON.parse(localStorage.getItem("role")),
      token: JSON.parse(localStorage.getItem("token")),
    });
  };

  const logout = () => {
    localStorage.setItem("token", JSON.stringify(""));
    localStorage.setItem("role", JSON.stringify(""));
    localStorage.setItem("username", JSON.stringify(""));
    setAuth({ user: "", role: "", token: "" });

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
        auth={auth}
        setAuth={setAuth}
        login={login}
        logout={logout}
        handleShowLogin={handleShowLogin}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        totalHighlights={totalHighlights}
        changeData={changeData}
        setChangeData={setChangeData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
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
