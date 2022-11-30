import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";

import {
  Button,
  Card,
  Container,
  Row,
  Modal,
  Form,
  Col,
  Pagination,
} from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Categorias from "./Categorias";
import { Route, Routes, Link, useParams } from "react-router-dom";

const Highlights = ({ data, add, cart, toastError, toastSuccess }) => {
  const [arrayFavourites, setArrayFavourites] = useState([
    {
      condition: "text-dark",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image:
        "https://www.ole.com.ar/images/2022/11/21/IyIvC3VNT_1290x760__1.jpg",
    },
    {
      condition: "text-dark",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      id: 2,

      title: "Mens Casual Premium Slim Fit T-Shirts ",
      image:
        "https://www.ole.com.ar/images/2022/11/23/wIkYyAEFw_1290x760__1.jpg",
    },
    {
      condition: "text-dark",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      id: 3,

      title: "Mens Cotton Jacket",
      image:
        "https://www.ole.com.ar/images/2022/11/24/Mx_Txhnz__1290x760__1.jpg",
    },
    {
      condition: "text-dark",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      id: 4,
      title: "Mens Casual Slim Fit",
      image:
        "https://www.ole.com.ar/images/2022/11/28/cbkiPRrp4_1290x760__1.jpg",
    },
    {
      condition: "text-dark",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      image:
        "https://www.ole.com.ar/images/2022/11/28/heZXOv5IP_1290x760__1.jpg",
    },
    {
      condition: "text-dark",
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      id: 6,

      title: "Solid Gold Petite Micropave ",
      image:
        "https://www.ole.com.ar/images/2022/11/28/QH-AYwCv3_1290x760__1.jpg",
    },
    ,
  ]);
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [image, setimage] = useState("");
  const [sybtitulo, setSubtitulo] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [edition, setEdition] = useState("");

  const handleEdition = () => {
    setEdition(!edition);
  };

  const starting = (i) => {
    let array = [];
    const localSTGFavourite =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    arrayFavourites.forEach((element) => {
      array.push(element);
    });
    if (localSTGFavourite.length < 3 || array[i].condition === "text-warning") {
      if (array[i].condition === "text-dark") {
        array[i].condition = "text-warning";
        toastSuccess("destacado agregado con éxito");
      } else {
        array[i].condition = "text-dark";
        toastSuccess("destacado eliminado con éxito");
      }
    } else {
      toastError("Sólo puede haber 3 destacados");
    }

    const arrayFilter = array.filter(
      (element) => element.condition === "text-warning"
    );

    setArrayFavourites(array);

    localStorage.setItem("favoritos", JSON.stringify(arrayFilter));
    localStorage.setItem("data", JSON.stringify(array));
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("data"))) {
      setArrayFavourites(JSON.parse(localStorage.getItem("data")));
    }
  }, []);
  return (
    <div>
      <Container fluid>
        <h2 className="title-news text-center">Noticias de la Semana</h2>
        <Row xs={1} md={2}>
          {arrayFavourites.map((d, i) => (
            <div className="col-12 col-md-12">
              <Card border="0" className="mt-5 card-highlights">
                <Card.Header className="title-section">MUNDIAL</Card.Header>
                {/* data.section */}
                <Card.Body>
                  <div className="detail-author">
                    <Card.Img variant="top" width={70} />
                    <Card.Title className="mt-4">Marina Bianconi</Card.Title>
                  </div>
                  {/* data.author */}
                  <div className="col-12 linea-style" />
                  <Card.Text>
                    <div className="social-media">
                      <div className="red-social">
                        <FontAwesomeIcon
                          style={{ fontSize: "3em", color: "#1986a0" }}
                          icon={faFacebook}
                        />
                      </div>
                      <div className="red-social">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ fontSize: "3em", color: "#1986a0" }}
                        />
                      </div>
                      <div className="red-social">
                        <FontAwesomeIcon
                          style={{ fontSize: "3em", color: "#1986a0" }}
                          icon={faInstagram}
                        />
                      </div>
                    </div>
                    <div className="col-12 linea-style" />
                  </Card.Text>
                  <Card.Title className="text-center">{d.title}</Card.Title>
                  {/* data.title */}
                </Card.Body>
              </Card>
              <Card border="0">
                <Card.Img src={d.image} />
                {/* data.image */}
                <Card.Body className="card-destacado">
                  <Card.Title>soy subtitulo</Card.Title>
                  {/* data.subtitulo */}
                  <Card.Text>{d.description}</Card.Text>
                  {/* data.description */}
                </Card.Body>
              </Card>

              <Button
                className="mt-5 mb-5"
                variant="primary"
                // onClick={() => add(data)}
              >
                Agregar a destacados
                <FontAwesomeIcon
                  id={`favourite${i}`}
                  className={arrayFavourites[i].condition}
                  icon={faStar}
                  onClick={() => {
                    starting(i);
                    console.log(arrayFavourites);
                  }}
                />
              </Button>
              <div className="col-12 line-style" />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Highlights;
