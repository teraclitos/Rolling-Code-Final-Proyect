import { React, useState, useEffect } from "react";
import "../styles/publicidad.css";

const Advertising = () => {
  const [modal, setModal] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setModal("visible");
    }, 500);
    setTimeout(() => {
      setModal("hidden");
    }, 3000);
  }, []);

  return (
    // <div>
    //   <body>
    //     <input type="checkbox" id="cerrar" />
    //     <label for="cerrar" id="btn-cerrar"></label>
    <div style={{ visibility: modal }} className="modal d-none d-md-flex">
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
          {" "}
          X
        </button>
      </div>
    </div>
    //   </body>
    // </div>
  );
};

export default Advertising;
