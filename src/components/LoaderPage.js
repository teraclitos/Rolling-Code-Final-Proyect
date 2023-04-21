import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "../styles/allcss.css";

const LoaderPage = () => {
  return (
    <div className="loader-page">
      <Spinner animation="grow" className="loader" />
    </div>
  );
};

export default LoaderPage;
