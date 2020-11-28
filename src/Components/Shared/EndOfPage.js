import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EndOfPage = () => {
  return (
    <>
      <Container className="align-items-bottom">
        <Row>
          <Col>
            <ul>
              <li>TOKEN SPORT LOGO</li>
              <li>info@tokensport.co</li>
              <li>Discord</li>
              <li>Telegram</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <Router>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/fans">Hinchas</Link>
                </li>
                <li>
                  <Link to="/collaborators">Colaboradores</Link>
                </li>
                <li>
                  <Link to="/partners">Partners</Link>
                </li>
                <li>
                  <Link to="/market">Market</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </Router>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Registrarme</li>
              <li>Acceder</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EndOfPage;
