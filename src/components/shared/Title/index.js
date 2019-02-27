import React from 'react';
import { array, oneOf, bool, string, oneOfType, object } from 'prop-types'

// STYLES
import { Text } from './styles';

const Title = ({ children, size, uppercase, bold, margin, color }) =>
  <Text uppercase={uppercase} size={size} bold={bold} margin={margin} color={color}>{children}</Text>


Title.defaultProps = {
  margin: '0px'
}

Title.propTypes = {
  children: oneOfType([array, string, object]),
  size: oneOf(['xlg', 'lg', 'sm', 'xmd', 'xsm']),
  uppercase: bool,
  bold: string,
  margin: string,
  color: string
}

export default Title;