import { React, useState, useEffect } from "react";
import "../styles/allcss.css";
import CloseButton from "react-bootstrap/CloseButton";

const Advertising = () => {
  const [modal, setModal] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setModal("visible");
    }, 500);
    setTimeout(() => {
      setModal("hidden");
    }, 5000);
  }, []);

  return (
    <div style={{ visibility: modal }} className="modal d-none d-md-flex">
      <div className="contenido">
        <img
          className="img-modal-publicity"
          src="https://marinjavier.com/wp-content/uploads/2020/10/mujeres-nike-anuncios.jpg"
        />
        <CloseButton
          onClick={() => {
            setModal("hidden");
          }}
          variant="white"
          className="btn-close-advertising "
        />
      </div>
    </div>
  );
};

export default Advertising;
