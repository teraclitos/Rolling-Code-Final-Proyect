import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Container, Pagination } from "react-bootstrap";
import {
  faHashtag,
  faLaptop,
  faTornado,
  faTwitter,
} from "@fortawesome/free-solid-svg-icons";
import Categorias from "./Categorias";
import "../styles/articledetail.css";
const ArticleDetail = (data) => {
  return (
    <div>
      <Container>
        <Card className="mt-5">
          <Card.Header className="title-section">MUNDIAL</Card.Header>
          {/* data.section */}
          <Card.Body>
            <div className="detail-author">
              <Card.Img variant="top" src="./logoRollingneta.png" width={70} />
              <Card.Title>Marina Bianconi</Card.Title>
            </div>
            {/* data.autho */}
            <div className="col-12 linea-style" />
            <Card.Text>
              <div className="social-media">
                <div className="red-social">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <div className="red-social">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <div className="red-social">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
              </div>
              <div className="col-12 linea-style" />
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <section className="mainContent-detail">
          <h1 className="titulo maindetail">MUNDIAL</h1> */}
        {/* {data.section} */}
        {/* <div className="detail-author">
            <img className="" src="./logoRollingneta.png" width={70} /> */}
        {/* agregar {data.author} */}
        {/* <p>Marina bianconi</p>
          </div>
          <div className="col-12 linea-style" />

          <div className="social-media">
            <div className="red-social"> */}
        {/* <FontAwesomeIcon icon={faHashtag} />
            </div>
            <div className="red-social">
              <FontAwesomeIcon icon={faHashtag} />
            </div>
            <div className="red-social">
              <FontAwesomeIcon icon={faHashtag} />
            </div>
          </div>
          <div className="col-12 linea-style" />

          <div className="description-art">
            <h4 className="text-center">SOY EL TITULO</h4>
          </div> */}

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.infobae.com/new-resizer/rKSVuDQ-o13QS8EZNFKTGza4rFA=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/WTXQAEFPA5ZBF2WXDZWALSCH4E.jpg"
          />
          <Card.Body>
            <Card.Title>SOY SUBTITULO DEL ARTICULO</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* {data.description} */}
        {/* </section> */}
        {/* <section className="colum-right">
          <Categorias />
        </section> */}
      </Container>
    </div>
  );
};

export default ArticleDetail;
{
  /* <img src="https://www.ole.com.ar/images/2022/11/20/2SUA3Japi_1290x760__1.jpg" />
            <h3>SOY UN SUBTITULO</h3> */
}
{
  /* {data.subtitulo} */
}
// <p>
//   Vincic, quien a los 42 años debutará en una Copa del Mundo, es
//   árbitro FIFA desde 2010 y dirigió en el Sub 17 de 2017 y en el Sub
//   20 de 2019. Viene de ser el juez principal de la final de la
//   última Europa League, ganada por el Eintracht Frankfurt de
//   Alemania. Sin embargo, parece ser que hay una historia que
//   despertó la curiosidad de los seguidores del fútbol en distintas
//   partes del mundo y es que el encargado de impartir justicia estuvo
//   detenido tras encontrarse en el lugar incorrecto en el momento
//   incorrecto.
// </p>
