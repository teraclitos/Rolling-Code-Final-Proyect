import { React, useState, useEffect } from "react";
import "../styles/allcss.css";
import CloseButton from "react-bootstrap/CloseButton";

const Advertising = ({ navigation }) => {
  const [modal, setModal] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setModal("visible");
    }, 3500);
    setTimeout(() => {
      setModal("hidden");
    }, 6000);
  }, []);

  return (
    <div style={{ visibility: modal }} className="modal d-none d-md-flex">
      <div className="contenido">
        <img
        alt="img publicity"
          onClick={() => {
            navigation("*");
          }}
          className="img-modal-publicity"
          src="https://res.cloudinary.com/duuwqmpmn/image/upload/v1729000897/Rolling%20code/publicidad-coca-cola-800x393_mkvsod.jpg"
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
