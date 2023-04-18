import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/allcss.css";

const Categorias = ({ auth, setIsLoading, handleShowLogin }) => {
  return (
    <div className="container categories-container mt-5 d-none d-lg-grid   ">
      <ul className="d-flex justify-content-center categories-list-container px-0   ">
        <li
          onClick={() => {
            !auth.user ? handleShowLogin() : setIsLoading(true);
          }}
          className="item-list-categories link-category "
        >
          <Link
            to="/category/Mundial"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Mundial
          </Link>
        </li>
        <li
          onClick={() => {
            !auth.user ? handleShowLogin() : setIsLoading(true);
          }}
          className="item-list-categories link-category "
        >
          <Link
            to="/category/Liga-Argentina"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Liga Argentina
          </Link>
        </li>
        <li
          onClick={() => {
            !auth.user ? handleShowLogin() : setIsLoading(true);
          }}
          className="item-list-categories link-category"
        >
          <Link
            to="/category/Tenis"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Tenis
          </Link>
        </li>
        <li
          onClick={() => {
            !auth.user ? handleShowLogin() : setIsLoading(true);
          }}
          className="item-list-categories link-category"
        >
          <Link
            to="/category/Basquet"
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
