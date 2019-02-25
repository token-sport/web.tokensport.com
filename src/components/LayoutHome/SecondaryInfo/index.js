import React from 'react';
import { object } from 'prop-types';

// COMPONENTS
import Title from 'components/shared/Title'
import Description from 'components/shared/Description'

// STYLES
import { Container } from './styles';

const SecondaryInfo = ({ title, description }) => (
  <Container>
    <Title size="xlg" bold="700">{title}</Title>
    <Description size="md" margin="20px 0">{description}</Description>
  </Container>
)

SecondaryInfo.propTypes = {
  title: object.isRequired,
  description: object.isRequired
}

export default SecondaryInfo