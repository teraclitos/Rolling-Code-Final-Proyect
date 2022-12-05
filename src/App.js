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
    console.log(data);
  }, [changeData]);
  // const [dataUser, setDataUser] = useState([]);
  // useEffect(() => {
  //   fetch("https://backend-news-eight.vercel.app/users/verusuarios")
  //     .then((res) => res.json())
  //     .then((json) => setDataUser(json));
  // }, []);
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
  // const USERS = [
  //   { user: "admin", pass: "admin", role: "admin" },
  //   { user: "user", pass: "user", role: "user" },
  // ];
  //  const validate = (u, p) => {
  //    let userOk = true;
  //    let passOk = false;
  //    let user = USERS.find((user) => user.user === u);
  //    user ? (passOk = user.pass === p) : (userOk = false);
  //    return userOk && passOk;
  //  };
  const [auth, setAuth] = useState({
    user: "",
    role: "",
  });
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  const validate = async (u, p) => {
    //   const response = await fetch(
    //     'https://backend-news-eight.vercel.app/users/login',
    //     {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username: u,
    //         password: p,
    //       }),
    //     }
    //   );
    //   await fetch(
    //     'https://localhost:5001/api/values',
    //     {
    //       method: 'POST',
    //       mode: 'cors',
    //       cache: 'no-cache',
    //       credentials: 'same-origin',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       redirect: 'follow',
    //       referrerPolicy: 'no-referrer',
    //       body: JSON.stringify({
    //         id: '123',
    //         name: 'qweq',
    //       }), // body data type must match "Content-Type" header
    //     }
    //   )
    //     .then(response => response.json())
    //     .then(data => {
    //       setData(data.name);
    //       setId(data.id);
    //     });
    //   console.log(response);
    //   return response;
  };
  const login = (u, r) => {
    setAuth({ user: u, role: r });
    console.log(auth);
  };
  const logout = () => {
    setAuth({ user: "", role: "" });
    console.log("seteo logout auth user" + auth.user);
    console.log("seteo logout auth role" + auth.role);
    toastSuccess("Sesión cerrada correctamente");
    // const token = JSON.parse(localStorage.getItem("token"));
    localStorage.setItem("token", JSON.stringify(""));
  };
  // const login = (u) => {
  //   const userFound = USERS.find((user) => user.user === u);
  //   setAuth({
  //     user: userFound.user,
  //     role: userFound.role,
  //   });
  //   toastSuccess(":hola: Bienvenido! Sesión iniciada correctamente");
  // };
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
        validate={validate}
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
