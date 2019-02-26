import React from 'react';
import { element, bool, string } from 'prop-types';

// STLYES
import { Card } from './styles'

const CardComponent = ({ children, withGradient, padding, showInHover }) => (
  <Card
    withGradient={withGradient}
    padding={padding}
    showInHover={showInHover}>
    {children}
  </Card>
)

CardComponent.propTypes = {
  children: element.isRequired,
  withGradient: bool.isRequired,
  padding: string.isRequired,
  showInHover: bool
}

export default CardComponent


