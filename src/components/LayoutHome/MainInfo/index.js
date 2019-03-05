import React from 'react'
import { string } from 'prop-types'

// COMPONENTS
import Title from 'components/shared/Title'
import Description from 'components/shared/Description'
import Button from 'components/shared/Button'
import { Link } from 'react-scroll';

// STYLES
import { Container } from './styles';

const redirectLitePaper = () => window.open('https://steemit.com/blockchain/@alefernandez/token-sport-presentacion-publica')

const MainInfo = () => (
  <Container>
    <Title size="xlg" bold="800" uppercase>
      <span>Tokeniza</span>
      <span>tus emociones</span>
    </Title>
    <Description margin="20px 0 30px" direction="column">
      <span>La primer Dapp que le da valor</span>
      <span>a tus emociones. ¡Haz llover Tokens!</span>
    </Description>
    <div className="MainInfoButtons">
      <Link
        to="#subscribe"
        smooth={true}
        duration={500}
        offset={-100}>
        <Button text="Tokenizar" margin="0 20px 0 0" />
      </Link>
      <Button text="Lite paper" transparent onClick={() => redirectLitePaper()} />
    </div>
  </Container>
)

MainInfo.propTypes = {
  text: string
}

export default MainInfo
