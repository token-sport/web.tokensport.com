import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
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
              <Card>
                <h1>Hinchas</h1>
                <h4>
                  <strong>
                    Crea tu perfil de fanático y sé parte de Token Sport desde
                    sus inicios.
                  </strong>
                </h4>
                <h5>
                  Podrás ser parte del Dream Team de Token Sport como usuario
                  “tester” teniendo la posibilidad de ayudar en la construcción
                  y actualización de la aplicación, obteniendo beneficios
                  únicos.
                </h5>
                <h4>
                  <strong>Cupo Limitado 600 usuarios en Etapa BETA.</strong>
                </h4>
              </Card>
            </div>
          </Col>
          <EndOfPage />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Fans;
