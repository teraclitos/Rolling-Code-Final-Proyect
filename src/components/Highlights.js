import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import "../styles/allcss.css";

import { Card, Container, Row } from "react-bootstrap";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import LoaderPage from "./LoaderPage";

const Highlights = ({
  data,
  add,
  cart,
  toastError,
  toastSuccess,
  totalHighlights,
  setPageH,
  pageH,
  totalPagesH,
  setIsLoadingHighlightPage,
  isLoadingHighlightPage,
  logout,
  auth,
}) => {
  const navigation = useNavigate();
  useEffect(() => {
    fetch(`https://backend-news-eight.vercel.app/users/control`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          logout();
          navigation("/");
        }
      });
  }, []);
  const changePageR = () => {
    setIsLoadingHighlightPage(true);
    if (pageH !== totalPagesH) {
      setPageH(pageH + 1);
    } else {
      setPageH(1);
    }
  };
  const changePageL = () => {
    setIsLoadingHighlightPage(true);
    if (pageH !== 1) {
      setPageH(pageH - 1);
    } else {
      setPageH(totalPagesH);
    }
  };
  return (
    <div>
      <Container
        fluid
        className="my-5 p-0 container-highlights-list min-vh-100"
      >
        <h2 className="title-news text-center">Noticias de la Semana</h2>

        {totalHighlights.map((d, i) => (
          <div key={"highlightdetail" + d._id}>
            {isLoadingHighlightPage ? (
              <LoaderPage />
            ) : (
              <Row
                className="  container-row-highlight me-auto ms-auto"
                xs={1}
                md={2}
              >
                <div className="col-12 col-md-12">
                  <Card border="0" className="mt-5 card-highlights">
                    <Card.Header className="title-section  d-flex align-items-center justify-content-center">
                      {d.category}
                    </Card.Header>

                    <Card.Body>
                      <div className="detail-author">
                        <Card.Img variant="top" src={d.img_URL} width={70} />
                        <Card.Title className="mt-4">{d.author}</Card.Title>
                      </div>

                      <div className="col-12 linea-style" />

                      <div className="social-media">
                        <div className="red-social">
                          <FontAwesomeIcon
                            className="icon-fb"
                            style={{ fontSize: "3em" }}
                            icon={faFacebook}
                          />
                        </div>
                        <div className="red-social">
                          <FontAwesomeIcon
                            className="icon-tw"
                            icon={faTwitter}
                            style={{ fontSize: "3em" }}
                          />
                        </div>
                        <div className="red-social">
                          <FontAwesomeIcon
                            className="icon-ig"
                            style={{ fontSize: "3em" }}
                            icon={faInstagram}
                          />
                        </div>
                      </div>
                      <div className="col-12 linea-style" />

                      <Card.Title className="text-center fs-1 py-3">
                        {d.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card border="0">
                    <Card.Img src={d.img_URL} />

                    <Card.Body className="">
                      <Card.Title className="title-description fs-4 my-4">
                        {d.description}
                      </Card.Title>

                      <Card.Text className="content fs-6 py-4">
                        {d.content}
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <div className="col-12 card-highlights" />
                </div>
              </Row>
            )}
          </div>
        ))}

        <div className="mt-5 mb-3 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="me-2 arrow-page fs-4 arrow-page-left"
            onClick={() => {
              changePageL();
            }}
          />
          <span className="number-highlight">{pageH}</span>
          <FontAwesomeIcon
            onClick={() => {
              changePageR();
            }}
            icon={faArrowRight}
            className="ms-2 fs-4 arrow-page "
          />
        </div>
      </Container>
    </div>
  );
};

export default Highlights;
