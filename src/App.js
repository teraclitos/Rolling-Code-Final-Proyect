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
import Highlights from "../src/components/Highlights";
import ArticleFound from "../src/components/ArticleFound";
import Advertising from "./components/Advertising";

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
  };

  const del = (p) => {
    console.log(p);
    setCart(cart.filter((c) => c.id !== p.id));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} del={del} clear={clear} data={data} />
        <Header />
        {/* <Advertising /> */}
        {/* <ArticleDetailContainer data={data} /> */}
        {/* <Articlepublicitygrid data={data} /> */}
        {/* <Contact /> */}
        <Routes>
          <Route
            path="/highlights"
            element={<Highlights add={add} cart={cart} />}
          />
          <Route path="/articlefound" element={<ArticleFound data={data} />} />
          <Route
            path="/"
            element={<Articlepublicitygrid data={data} add={add} cart={cart} />}
          />
          <Route path="/contacto" element={<Contact />} />
          <Route
            path="/ArticleDetailContainer/:id"
            element={<ArticleDetailContainer add={add} cart={cart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
