import React from 'react';
import { string, bool } from 'prop-types';

import { Image } from './styles'

const ImageComponent = ({ src, alt, width, height, isIcon }) =>
  <Image src={src} alt={alt} width={width} height={height} isIcon={isIcon}/>

ImageComponent.propTypes = {
  src: string,
  alt: string,
  width: string,
  height: string,
  isIcon: bool
}

export default ImageComponent

