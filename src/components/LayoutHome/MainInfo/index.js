import React from "react";
import { object } from "prop-types";

// COMPONENTS
import Section from "components/LayoutHome/Sections";
import Image from "components/shared/Image";
import Title from "components/shared/Title";
import Description from "components/shared/Description";
import Button from "components/shared/Button";
import { Link } from "react-scroll";

// STYLES
import { Container } from "./styles";

const redirectLitePaper = () =>
  window.open(
    "https://steemit.com/blockchain/@alefernandez/token-sport-presentacion-publica"
  );

const MainInfo = ({ heroInfo }) => (
  <Section isReverse={false} section={0}>
    <div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokeniza-tus-emociones%402x.png?alt=media&token=e05753f2-859f-451e-9160-0611e4a3272e"
        alt="logo"
        height="100%"
        width="100%"
        isIcon
      />
    </div>
    <Container>
      <Title size="xlg" bold="800" uppercase isHero={true}>
        {heroInfo.title}
      </Title>
      <Description margin="20px 0 30px" isHero={true} direction="column">
        {heroInfo.description}
      </Description>
      <div className="MainInfoButtons">
        <Link to="#subscribe" smooth={true} duration={500} offset={-100}>
          <Button text={heroInfo.cta} margin="0 20px 0 0" />
        </Link>
        <Link to="https://steemit.com/blockchain/@alefernandez/token-sport-presentacion-publica">
          <Button
            text={heroInfo.scta}
            transparent
            onClick={() => redirectLitePaper()}
          />
        </Link>
      </div>
    </Container>
  </Section>
);

MainInfo.propTypes = {
  heroInfo: object
};

export default MainInfo;
