import React from 'react';
import { string } from 'prop-types';

import { Image } from './styles'

const ImageComponent = ({ src, alt, width, height }) =>
  <Image src={src} alt={alt} width={width} height={height} />

ImageComponent.propTypes = {
  src: string,
  alt: string,
  width: string,
  height: string,
}

export default ImageComponent

