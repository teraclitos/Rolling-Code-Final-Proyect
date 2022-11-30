import React, { useState } from "react";

import "../styles/allcss.css";

const Categorias = (data) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container categories-container mt-5 ps-0">
      <ul className="d-flex justify-content-center  categories-list-container   ">
        <li className="item-list-categories link-category ">Fútbol</li>
        <li className="item-list-categories link-category ">Tenis</li>
        <li className="item-list-categories link-category">Rugby</li>
        <li className="item-list-categories link-category">Atletismo</li>
      </ul>
    </div>
  );
};

export default Categorias;
