import React from 'react';
import { array, string, oneOfType, object } from 'prop-types';

// STYLES
import { Description } from './styles'

const DescriptionComponent = ({ size, children, margin, direction }) =>
  <Description margin={margin} size={size} direction={direction}>{children}</Description>

DescriptionComponent.defaultProps = {
  margin: '0px',
  direction: 'unset'
}

DescriptionComponent.propTypes = {
  children: oneOfType([array, string, object]),
  size: string,
  margin: string,
  direction: string
}

export default DescriptionComponent