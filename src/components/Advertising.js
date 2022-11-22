import { React, useState, useEffect } from "react";
import "../styles/publicidad.css";

const Advertising = () => {
  const [modal, setModal] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setModal("flex");
    }, 3000);
    setTimeout(() => {
      setModal("none");
    }, 7000);
  }, []);

  return (
    // <div>
    //   <body>
    //     <input type="checkbox" id="cerrar" />
    //     <label for="cerrar" id="btn-cerrar"></label>
    <div style={{ display: modal }} className="modal">
      <div className="contenido">
        <img
          className="img-modal-publicity"
          src="https://marinjavier.com/wp-content/uploads/2020/10/mujeres-nike-anuncios.jpg"
        />
        <button
          onClick={() => {
            setModal("none");
          }}
          className="btn-cerrar "
        >
          X
        </button>
      </div>
    </div>
    //   </body>
    // </div>
  );
};

export default Advertising;
