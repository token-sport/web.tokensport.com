import React from 'react';
import { element, bool } from 'prop-types'

// STYLES
import { Container, ImageSection, InfoSection } from './styles'

const Section = ({ image, info, isReverse }) => (
  <Container isReverse={isReverse}>
    <ImageSection>
      {image}
    </ImageSection>
    <InfoSection>
      {info}
    </InfoSection>
  </Container>
)

Section.propTypes = {
  image: element,
  info: element,
  isReverse: bool
}

export default Section