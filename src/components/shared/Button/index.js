import React from 'react';
import { string, bool } from 'prop-types';

// STYLES
import { Button } from './styles';

const ButtonComponent = ({ text, transparent, small }) => (
  <Button transparent={transparent} small={small}>
    {text}
  </Button>
)

ButtonComponent.propTypes = {
  text: string,
  transparent: bool,
  small: bool
}

export default ButtonComponent