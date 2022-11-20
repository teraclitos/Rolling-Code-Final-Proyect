import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Articlepublicitygrid from "../src/components/Articlepublicitygrid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ArticleDetailContainer from "./components/ArticleDetailContainer";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  //carrito de mg
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  //CART
  const add = (p) => {
    setCart([...cart, p]);
    console.log("hola");
  };

  const del = (p) => {
    console.log(p);
  };

  const clear = () => {};
  //para navbar

  return (
    <div>
      <Navbar cart={cart} />
      <Header />
      <ArticleDetailContainer data={data} />
      {/* <Articlepublicitygrid data={data} /> */}
      {/* <Contact /> */}
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articlepublicitygrid data={data} />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
