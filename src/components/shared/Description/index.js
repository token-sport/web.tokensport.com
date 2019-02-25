import React from 'react';
import { array, string } from 'prop-types';

// STYLES
import { Description } from './styles'

const DescriptionComponent = ({ size, children }) => <Description size={size}>{children}</Description>

DescriptionComponent.propTypes = {
  children: array,
  size: string
}

export default DescriptionComponent