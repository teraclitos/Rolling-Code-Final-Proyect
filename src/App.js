import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  const [changeData, setChangeData] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const handleShowLogin = () => setShowLogin(true);
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]);

  const editButtom = document.getElementById("edit-buttom");
  const params = useParams();
  useEffect(() => {
    fetch("https://backend-news-eight.vercel.app/news/news")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, [changeData]);

  useEffect(() => {
    if (auth.id && auth.role === "user") {
      fetch(
        `https://backend-news-eight.vercel.app/users/favorite?id=${auth.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: auth.token,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          setCart(json);
        });
    }
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const add = (p) => {
    setCart([...cart, p]);
    fetch(
      `https://backend-news-eight.vercel.app/users/favoritecreate?id=${auth.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: auth.token,
        },

        body: JSON.stringify({
          favorites: cart,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => console.log(error));
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
    id: JSON.parse(localStorage.getItem("id")),
  });

  const login = () => {
    setAuth({
      user: JSON.parse(localStorage.getItem("username")),
      role: JSON.parse(localStorage.getItem("role")),
      token: JSON.parse(localStorage.getItem("token")),
      id: JSON.parse(localStorage.getItem("id")),
    });
  };

  const logout = () => {
    localStorage.setItem("token", JSON.stringify(""));
    localStorage.setItem("role", JSON.stringify(""));
    localStorage.setItem("username", JSON.stringify(""));
    localStorage.setItem("id", JSON.stringify(""));

    setAuth({ user: "", role: "", token: "", id: "" });

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
