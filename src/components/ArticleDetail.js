import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHashtag,
  faLaptop,
  faTornado,
  faTwitter,
} from "@fortawesome/free-solid-svg-icons";
import Categorias from "./Categorias";

const ArticleDetail = (data) => {
  return (
    <div>
      <main className="maindetail">
        <div className="container">
          <section className="mainContent-detail">
            <h1 className="title-articledetail">MUNDIAL</h1>
            {/* {data.section} */}
            <div className="detail-author">
              <spar>por</spar>
              <img src="./logoRollingneta.png" width={70} />
              {/* agregar {data.author} */}
              <p>Marina bianconi</p>
            </div>
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
            <div className="description-art">
              <h4 className="text-center">SOY EL TITULO</h4>
              <img src="https://www.ole.com.ar/images/2022/11/20/2SUA3Japi_1290x760__1.jpg" />
              <h3>SOY UN SUBTITULO</h3>
              {/* {data.subtitulo} */}
              <p>
                Vincic, quien a los 42 años debutará en una Copa del Mundo, es
                árbitro FIFA desde 2010 y dirigió en el Sub 17 de 2017 y en el
                Sub 20 de 2019. Viene de ser el juez principal de la final de la
                última Europa League, ganada por el Eintracht Frankfurt de
                Alemania. Sin embargo, parece ser que hay una historia que
                despertó la curiosidad de los seguidores del fútbol en distintas
                partes del mundo y es que el encargado de impartir justicia
                estuvo detenido tras encontrarse en el lugar incorrecto en el
                momento incorrecto.
              </p>
              {/* {data.description} */}
            </div>
          </section>
          <section className="colum-right">
            <Categorias />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
