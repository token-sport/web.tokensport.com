import React from 'react';
import { array, oneOf } from 'prop-types'

// STYLES
import { Text } from './styles';

const Title = ({ children, size }) => <Text size={size}>{children}</Text>

Title.propTypes = {
  children: array,
  size: oneOf(['xlg', 'lg', 'sm'])
}

export default Title;