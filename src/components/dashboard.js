import React from "react";
import "./dashboard.css";
import scooter from "../images/Scooter.png";
import gif from "../images/circle.gif";
import { Typography } from "@mui/material";
import { Col, Container, Row } from "react-grid-system";
const Dashboard = () => {
  return (
    <Container>
      <Row className="row">
        <Col lg={6}>
          <img className="imgGif" src={gif} alt="gif" />
          <img className="scooter" src={scooter} alt="scooter" />
        </Col>
        <Col lg={6} className="col2">
          <Typography className="heading">
            A neat <br /> headline
            <br /> comes here !
          </Typography>
          <Typography className="content">
            A neat sample text to come here super soon. Till <br /> then admire
            the authentic and delightful User <br /> Interface Design of the
            Website. We are glad you <br />
            came here , thanks for visiting .
          </Typography>
          <div className="btn1">
            <button className="showBtn">Show Details</button>
          </div>
        </Col>
      </Row>
      <div className="pagination">
        <button className="redCircle" />
        <button id="circle" />
        <button id="circle" />
        <button id="circle" />
        <button id="circle" />
      </div>
    </Container>
  );
};

export default Dashboard;
