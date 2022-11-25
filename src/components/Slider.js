import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel className="mt-3 d-none d-lg-block">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ole.com.ar/images/2022/11/21/IyIvC3VNT_1290x760__1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            La tabla del Mundial de Qatar 2022: resultados y posiciones después
            de la primera fecha
          </h3>
          <p>
            Se terminó la primera fecha de la Copa del Mundo. Desde este viernes
            hasta el lunes, la segunda jornada a full. ¡Acá toda la info!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ole.com.ar/images/2022/11/23/wIkYyAEFw_1290x760__1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mundial Qatar 2022: hora y TV de cada partido</h3>
          <p>
            Continúa la primera fase de la Copa del Mundo con cuatro partidos en
            cada jornada.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ole.com.ar/images/2022/11/24/Mx_Txhnz__1290x760__1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>La brutal estadística que explica la lesión de Neymar</h3>
          <p>
            El astro de Brasil sufrió una entorsis en su tobillo derecho en el
            debut y no asombra: fue el blanco de las faltas de los serbios. Acá,
            un dato revelador.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
