import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/allcss.css";

const Categorias = (data) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container categories-container mt-5 d-none d-lg-grid   ">
      <ul className="d-flex justify-content-center categories-list-container px-0   ">
        <li className="item-list-categories link-category ">
          <Link
            to="/category"
            style={{ textDecoration: "none" }}
            className="text-white"
          >
            Mundial
          </Link>
        </li>
        <li className="item-list-categories link-category ">Liga argentina</li>
        <li className="item-list-categories link-category">Tenis</li>
        <li className="item-list-categories link-category">Basquet</li>
      </ul>
    </div>
  );
};

export default Categorias;
