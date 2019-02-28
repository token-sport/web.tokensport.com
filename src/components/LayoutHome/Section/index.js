import React from 'react';
import { element, bool } from 'prop-types'

// STYLES
import { Container, SideSection, InfoSection } from './styles'

const Section = ({ componentSide, info, isReverse }) => (
  <Container isReverse={isReverse}>
    <SideSection>
      {componentSide}
    </SideSection>
    <InfoSection>
      {info}
    </InfoSection>
  </Container>
)

Section.propTypes = {
  componentSide: element,
  info: element,
  isReverse: bool
}

export default Section