import React from 'react'
import { string } from 'prop-types'

// COMPONENTS
import Title from 'components/shared/Title'
import Description from 'components/shared/Description'
import Button from 'components/shared/Button'

// STYLES
import { Container } from './styles';

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
      <Button text="Tokenizar" margin="0 20px 0 0" />
      <Button text="White paper" transparent />
    </div>
  </Container>
)

MainInfo.propTypes = {
  text: string
}

export default MainInfo
