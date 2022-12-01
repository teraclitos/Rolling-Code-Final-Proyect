import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/allcss.css";

const Categorias = (data) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container categories-container mt-5 d-none d-lg-grid   ">
      <ul className="d-flex justify-content-center categories-list-container px-0   ">
        <li
          onClick={() => {
            localStorage.setItem("category", JSON.stringify({ id: 1 }));
          }}
          className="item-list-categories link-category "
        >
          <Link
            to="/category"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Mundial
          </Link>
        </li>
        <li
          onClick={() => {
            localStorage.setItem("category", JSON.stringify({ id: 2 }));
          }}
          className="item-list-categories link-category "
        >
          <Link
            to="/category"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Liga Argentina
          </Link>
        </li>
        <li
          onClick={() => {
            localStorage.setItem("category", JSON.stringify({ id: 3 }));
          }}
          className="item-list-categories link-category"
        >
          <Link
            to="/category"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Tenis
          </Link>
        </li>
        <li
          onClick={() => {
            localStorage.setItem("category", JSON.stringify({ id: 4 }));
          }}
          className="item-list-categories link-category"
        >
          <Link
            to="/category"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Basquet
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categorias;
