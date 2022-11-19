import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Articlepublicitygrid from "../src/components/Articlepublicitygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Publicidad from "./components/Publicidad";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

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

  const total = () => {};

  return (
    <div>
      <Navbar cart={cart} />
      <Articlepublicitygrid data={data} add={add} />
      <Contact />
      <Footer />
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Articlepublicitygrid />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
