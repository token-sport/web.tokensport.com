import React from 'react'

// COMPONENTS
import Title from 'components/shared/Title';

// STYLES
import { Container, WordsColor } from './styles';

const LayoutHome = () => (
  <Container>
    <Title>Comparte tus <WordsColor color="neonOrange">emociones</WordsColor></Title>
  </Container>
)

export default LayoutHome