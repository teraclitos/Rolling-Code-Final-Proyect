import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/allcss.css";

const Categorias = ({ auth, setIsLoading, handleShowLogin }) => {
  const categories = ["Mundial", "Liga-Argentina", "Tenis", "Basquet"];
  return (
    <div className="container categories-container mt-5 d-none d-lg-grid   ">
      <ul className="d-flex justify-content-center categories-list-container px-0   ">
        {categories.map((c, i) => (
          <li
            key={c + i}
            onClick={() => {
              !auth.user ? handleShowLogin() : setIsLoading(true);
            }}
            className="item-list-categories link-category "
          >
            <Link
              to={auth.user && `/category/${c}`}
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              {c.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
