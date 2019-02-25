import React from 'react';
import { array, oneOf, bool, string } from 'prop-types'

// STYLES
import { Text } from './styles';

const Title = ({ children, size, uppercase, bold }) =>
  <Text uppercase={uppercase} size={size} bold={bold}>{children}</Text>

Title.propTypes = {
  children: array,
  size: oneOf(['xlg', 'lg', 'sm']),
  uppercase: bool,
  bold: string
}

export default Title;