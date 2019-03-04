import React from 'react';
import { string, bool } from 'prop-types';

import { Image } from './styles'

const ImageComponent = ({ src, alt, width, height, isIcon, isGray }) =>
  <Image src={src} alt={alt} width={width} height={height} isIcon={isIcon} isGray={isGray}/>

ImageComponent.propTypes = {
  src: string,
  alt: string,
  width: string,
  height: string,
  isIcon: bool,
  isGray: bool
}

export default ImageComponent

