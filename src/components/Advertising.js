import React from "react";
import "../styles/publicidad.css";

const Advertising = () => {
  return (
    <div>
      <body>
        <input type="checkbox" id="cerrar" />
        <label for="cerrar" id="btn-cerrar"></label>
        <div className="modal">
          <div className="contenido mt-5">
            <img src="https://marinjavier.com/wp-content/uploads/2020/10/mujeres-nike-anuncios.jpg" />
          </div>
        </div>
      </body>
    </div>
  );
};

export default Advertising;
