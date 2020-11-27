import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Shared/Navigation";
import Sidebar from "./Shared/Sidebar";
import EndOfPage from "./Shared/EndOfPage";
import Footer from "./Shared/Footer";

const Fans = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <div className="mt-5">
              <h1>Hinchas</h1>
            </div>
            <EndOfPage />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Fans;
