import React from 'react';
import { string, bool } from 'prop-types';

// STYLES
import { Button } from './styles';

const ButtonComponent = ({ text, transparent, small, margin }) => (
  <Button margin={margin} transparent={transparent} small={small}>
    {text}
  </Button>
)

ButtonComponent.defaultProps = {
  margin: '0px'
}

ButtonComponent.propTypes = {
  text: string,
  transparent: bool,
  small: bool,
  margin: string
}

export default ButtonComponent