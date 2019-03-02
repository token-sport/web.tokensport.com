import React from 'react';
import { number, element, bool } from 'prop-types'
// STYLES
import { Container, SideSection, InfoSection } from './styles'

const Section = ({ id, componentSide, info, isReverse }) => (
  <Container isReverse={isReverse} section={id}>
    <SideSection>
      {componentSide}
    </SideSection>
    <InfoSection>
      {info}
    </InfoSection>
  </Container>
)

Section.propTypes = {
  id: number,
  componentSide: element,
  info: element,
  isReverse: bool
}

export default Section