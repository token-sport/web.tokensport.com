import React from 'react';
import { string, bool, func } from 'prop-types';

// STYLES
import { Button } from './styles';

const ButtonComponent = ({ text, transparent, small, margin, onClick }) => (
  <Button
    margin={margin}
    transparent={transparent}
    small={small}
    onClick={onClick}>
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
  margin: string,
  onClick: func
}

export default ButtonComponent