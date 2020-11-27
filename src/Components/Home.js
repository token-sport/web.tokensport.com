import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Navigation from "./Shared/Navigation";
import Sidebar from "./Shared/Sidebar";
import EndOfPage from "./Shared/EndOfPage";
import Footer from "./Shared/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row className="mt-5 pt-5">
          <Col xs={3} sm={2} md={2} lg={1} xl={1}>
            <Sidebar />
          </Col>
          <Col xs={9} sm={10} md={10} lg={11} xl={11}>
            {/**+-Introduction:_*/}
            <section className="intro" id="intro">
              <h1>Tokeniza tus emociones</h1>
              <h4>La primer Dapp que le da valor a tus emociones.</h4>
              <Button>Súmate</Button>
            </section>

            {/**+-About TSP:_*/}
            <section className="about" id="about">
              About TSP
            </section>

            {/**+-Share Your Emotions:_*/}
            <section className="shareYourEmotions" id="shareYourEmotions">
              Share Your Emotions
            </section>

            {/**+-What is the TSP Token:_*/}
            <section className="shareYourEmotions" id="shareYourEmotions">
              What is the TSP To
            </section>

            <EndOfPage />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
