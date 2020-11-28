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
              <h4>
                <strong>La primer Dapp que le da valor a tus emociones.</strong>
              </h4>
              <Button>Súmate</Button>
            </section>

            {/**+-About TSP:_*/}
            <section className="about" id="about">
              <div>
                <h2>¿Qué rayos es Token Sport?</h2>
                <h4>
                  <strong>
                    Es la primer Dapp (aplicación descentralizada) que permite a
                    los usuarios compartir sus emociones en los deportes y por
                    medio de tecnología BlockChain, tokenizar sus datos.
                  </strong>
                </h4>
              </div>
              <Card>
                <h2>Descarga</h2>
                <h4>
                  Descarga TOKEN SPORT en el celular y completa tu perfil como
                  hincha.
                </h4>
              </Card>
              <Card>
                <h2>Interactua</h2>
                <h4>
                  Aplaude y Abuchea a jugadores, jueces y cuerpo técnico en cada
                  partido para ganar tokens TSP que podrás cambiar por
                  productos, servicios o bitcoin.
                </h4>
              </Card>
              <Card>
                <h2>Gana TSP</h2>
                <h4>
                  Selecciona las ligas en las que quieras interactuar, ingresa
                  al partido que quieras asistir y comienza a compartir tus
                  emociones.
                </h4>
              </Card>
            </section>

            {/**+-Share Your Emotions:_*/}
            <section className="shareYourEmotions" id="shareYourEmotions">
              <div>
                <h1>Comparte tus emociones</h1>
                <h4>
                  <strong>
                    Elige el partido de fútbol en el que quieras interactuar con
                    la comunidad. Aplaude o Abuchea a los jugadores, jueces y
                    técnicos en cada partido.
                  </strong>
                </h4>
              </div>
              <div>
                <Card>
                  <h4>
                    <strong>Apuestas en vivo</strong>
                  </h4>
                  <h4>
                    Elige el jugador que creas que será el más Aplaudo y el más
                    Abucheado en cada partido y gana más tokens TSP
                  </h4>
                </Card>
                <Card>
                  <h4>
                    <strong>Arma tu once ideal</strong>
                  </h4>
                  <h4>
                    Elige tu equipo perfecto con los jugadores que creas que
                    serán los más aplaudidos en todo el año y compite con los
                    once ideales de toda la comunidad. El ganador se llevará un
                    gran bote de tokens TSP al finalizar el torneo.
                  </h4>
                </Card>
              </div>
            </section>

            {/**+-What is the TSP Token:_*/}
            <section className="shareYourEmotions" id="shareYourEmotions">
              <div>
                <h1>¿Qué es TSP?</h1>
                <h4>
                  El token TSP es un activo digital de Token Sport que
                  representa el valor de las interacciones. Cuanto mayor sea la
                  cantidad de usuarios e interacciones, más valor tendrán tus
                  TSP.
                  <br />
                  <br />
                  Al crear tu cuenta obtendrás una billetera digital donde
                  recibirás tokens TSP Crea tu perfil de Fanático y recibe tus
                  primeros TSP Elige las ligas en las que quieras interactuar
                  Cuando juegue tu equipo podrás comprar la boleta con 1 TSP.
                </h4>
              </div>
              <div>
                <h4>
                  Durante el partido vas a poder Aplaudir y Abuchear a
                  Jugadores, Jueces y Técnicos de ambos equipos.
                  <br />
                  <br />
                  También podrás interactuar con fanáticos, responder encuestas
                  y trivias sobre clubes y jugadores para ganar más tokens TSP.
                  <br />
                  Los Auspiciantes aportarán tokens TSP al partido y así obtener
                  espacio en vallas publicitarias, videos o imágenes en los
                  entretiempos, auspiciar jugadores y muchas opciones más.
                  <br />
                  <br />
                  Esos tokens serán incorporados al “bote del partido” y al
                  finalizar el encuentro se repartirán entre los Fanáticos que
                  interactuaron.
                </h4>
              </div>
              <div>
                <h4>
                  Medios de Comunicación y Usuarios Avanzados pueden acceder a
                  estadísticas “en vivo” comprando paquetes de Datos con tokens
                  TSP(La jugada más aplaudida El jugador más abucheado El
                  jugador más aplaudido ... y muchos datos más!).
                  <br />
                  <br />
                  Podrás intercambiar tokens TSP por Merchandisign Oficial de
                  tus equipos favoritos, boletas al estadio y muchos beneficios
                  más. También vas a poder comprar productos o servicios en las
                  tiendas de Auspiciantes y Aliados, o intercambiar tus TSP por
                  bitcoin.
                </h4>
              </div>
            </section>

            {/**+-SAVE TSP Token:_*/}
            <section className="saveTSP" id="saveTSP">
              <h4>
                <strong>
                  Almacena tus TSP para tener poder de voto en actualizaciones y
                  avances de TOKEN SPORT (NBA, NHL, NFL, ROLAND GARROS, LA LIGA
                  ... y muchas expansiones más
                </strong>
              </h4>
            </section>
          </Col>
          <EndOfPage />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
