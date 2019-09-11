import React from 'react';
import { string, object } from 'prop-types';

import CircleImageContainer from './styles';

const CircleImage = ({ children, shadow, width, height }) => 
  <CircleImageContainer 
    shadow={shadow}
    width={width}
    height={height}>
    {children}
  </CircleImageContainer>;

CircleImage.defaultProps = {
  shadow: "neonBlue",
  width: "100px",
  height: "100px"
}

CircleImage.propTypes = {
  children: object,
  shadow: string,
  width: string,
  height: string
}

export default CircleImage;

