import React from 'react';
import { oneOfType, object, string } from 'prop-types';

// COMPONENTS
import Title from 'components/shared/Title'
import Description from 'components/shared/Description'

// STYLES
import { Container } from './styles';

const SecondaryInfo = ({ title, description, widthDescription }) => (
  <Container>
    <Title size="xlg" bold="700">{title}</Title>
    <Description width={widthDescription} size="md" margin="20px 0">{description}</Description>
  </Container>
)

SecondaryInfo.propTypes = {
  title: oneOfType([object, string]),
  description: oneOfType([object, string]),
  widthDescription: string
}

export default SecondaryInfo