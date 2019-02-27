import React from 'react';
import { array, string, oneOfType, object } from 'prop-types';

// STYLES
import { Description } from './styles'

const DescriptionComponent = ({ size, children, margin, direction, width }) =>
  <Description
    margin={margin}
    size={size}
    direction={direction}
    width={width}>{children}</Description>

DescriptionComponent.defaultProps = {
  margin: '0px',
  direction: 'unset',
  width: 'auto'
}

DescriptionComponent.propTypes = {
  children: oneOfType([array, string, object]),
  size: string,
  margin: string,
  direction: string,
  width: string
}

export default DescriptionComponent