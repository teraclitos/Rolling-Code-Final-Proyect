import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styles/allcss.css";

const Categorias = ({ auth, setIsLoading, handleShowLogin }) => {
  const categories = ["Mundial", "Liga-Argentina", "Tenis", "Basquet"];
  const navigation = useNavigate();
  const categorieNavigation = (c) => {
    setIsLoading(true);
    navigation(`/category/${c}`);
  };
  return (
    <div
      className={
        auth.role === "admin"
          ? "container categories-container-admin mt-5 d-none d-lg-grid   "
          : "container categories-container mt-5 d-none d-lg-grid   "
      }
    >
      <ul className="d-flex justify-content-center categories-list-container px-0   ">
        {categories.map((c, i) => (
          <li
            key={c + i}
            onClick={() => {
              !auth.user ? handleShowLogin() : categorieNavigation(c);
            }}
            className="item-list-categories link-category "
          >
            {c.replace("-", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
