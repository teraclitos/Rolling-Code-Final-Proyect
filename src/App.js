import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [pageH, setPageH] = useState(1);
  const [totalPagesH, setTotalPagesH] = useState("");
  const [changeData, setChangeData] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHighlight, setIsLoadingHighlight] = useState(true);
  const [isLoadingHighlightPage, setIsLoadingHighlightPage] = useState(true);
  const handleShowLogin = () => setShowLogin(true);
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [modifyFavorite, setModifyFavorite] = useState(null);
  const [deleteFavorite, setDeleteFavorite] = useState(null);
  const [loadFavorite, setLoadFavorite] = useState(true);
  const [newLoad, setNewLoad] = useState(0);
  const [totalHighlights, setTotalHighlights] = useState([]);

  const [category, setCategory] = useState("");

  const modifyFavoriteFetch = () => {
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
        setModifyFavorite(null);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch(
      `https://backend-news-eight.vercel.app/news/news?limit=6&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.docs);
        setTotalPages(json.totalPages);
      })
      .finally(() => setIsLoading(false));
  }, [changeData, page, newLoad]);

  useEffect(() => {
    fetch(
      `https://backend-news-eight.vercel.app/news/highlight?highlight=true&limit=${
        window.location.pathname === "/" ? 3 : 1
      }&page=${window.location.pathname === "/" ? 1 : pageH}`
    )
      .then((res) => res.json())
      .then((json) => {
        setTotalHighlights(json.docs);
        setTotalPagesH(json.totalPages);
      })
      .finally(() => {
        setIsLoadingHighlight(false);
        setIsLoadingHighlightPage(false);
      });
  }, [changeData, page, newLoad, pageH]);

  const add = (p) => {
    setCart((cart) => [...cart, p]);
  };
  const del = (p) => {
    setCart(cart.filter((c) => c._id !== p._id));
  };
  const clear = () => {
    setCart([]);
  };

  const [auth, setAuth] = useState({
    user: JSON.parse(localStorage.getItem("username")) || "",
    role: JSON.parse(localStorage.getItem("role")) || "",
    token: JSON.parse(localStorage.getItem("token")) || "",
    id: JSON.parse(localStorage.getItem("id")) || "",
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
  };
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
          if (!json.error) {
            setCart(json);
          } else {
            logout();
          }
        })
        .finally(() => setLoadFavorite(false));
    }
  }, [auth]);

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

  return (
    <BrowserRouter>
      <Main
        toastError={toastError}
        toastSuccess={toastSuccess}
        cart={cart}
        setCart={setCart}
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
        deleteFavorite={deleteFavorite}
        setDeleteFavorite={setDeleteFavorite}
        modifyFavorite={modifyFavorite}
        setModifyFavorite={setModifyFavorite}
        modifyFavoriteFetch={modifyFavoriteFetch}
        loadFavorite={loadFavorite}
        setLoadFavorite={setLoadFavorite}
        newLoad={newLoad}
        setNewLoad={setNewLoad}
        category={category}
        setCategory={setCategory}
        isLoadingHighlight={isLoadingHighlight}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        setIsLoadingHighlight={setIsLoadingHighlight}
        pageH={pageH}
        setPageH={setPageH}
        totalPagesH={totalPagesH}
        setIsLoadingHighlightPage={setIsLoadingHighlightPage}
        isLoadingHighlightPage={isLoadingHighlightPage}
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
