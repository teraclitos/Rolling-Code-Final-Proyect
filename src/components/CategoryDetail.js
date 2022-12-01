import { React, useState } from "react";
import "../styles/allcss.css";
import { Container, Row } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CategoryDetail = ({ data }) => {
  return (
    <div>
      <Container>
        <Row>MUNDIAL</Row>
        <Row lg={4}></Row>
      </Container>
    </div>
  );
};

export default CategoryDetail;
