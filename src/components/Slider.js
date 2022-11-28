import { React, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [destacados, setDestacados] = useState([
    {
      condition: "text-dark",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
      condition: "text-dark",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      id: 2,

      title: "Mens Casual Premium Slim Fit T-Shirts ",
    },
    {
      condition: "text-dark",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      id: 3,

      title: "Mens Cotton Jacket",
    },
  ]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favoritos"))) {
      setDestacados(JSON.parse(localStorage.getItem("favoritos")));
    }
  }, []);
  return (
    <Carousel indicators={false} pause={false} className=" d-none d-lg-block">
      {destacados.map((d, i) => (
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.ole.com.ar/images/2022/11/21/IyIvC3VNT_1290x760__1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item interval={3000}>
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
      <Carousel.Item interval={3000}>
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
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Slider;
