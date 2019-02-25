import React from 'react';
import { array, oneOf, bool, string, oneOfType, object } from 'prop-types'

// STYLES
import { Text } from './styles';

const Title = ({ children, size, uppercase, bold, margin }) =>
  <Text uppercase={uppercase} size={size} bold={bold} margin={margin}>{children}</Text>


Title.defaultProps = {
  margin: '0px'
}

Title.propTypes = {
  children: oneOfType([array, string, object]),
  size: oneOf(['xlg', 'lg', 'sm', 'xmd', 'xsm']),
  uppercase: bool,
  bold: string,
  margin: string
}

export default Title;