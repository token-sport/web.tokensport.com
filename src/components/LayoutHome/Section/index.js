import React from 'react';
import { number, element, bool, string } from 'prop-types'
// STYLES
import { Container, SideSection, InfoSection } from './styles'

const Section = ({ id, componentSide, info, isReverse, idSection }) => (
  <Container isReverse={isReverse} section={id} id={idSection}>
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
  isReverse: bool,
  idSection: string
}

export default Section