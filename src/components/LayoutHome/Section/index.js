import React from 'react';
import { element, bool } from 'prop-types'

// STYLES
import { Container } from './styles'

const Section = ({ image, info, isReverse }) => (
  <Container isReverse={isReverse}>
    {image}
    {info}
  </Container>
)

Section.propTypes = {
  image: element,
  info: element,
  isReverse: bool
}

export default Section