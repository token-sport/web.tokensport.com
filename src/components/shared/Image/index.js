import React from 'react';
import { string, bool } from 'prop-types';

import { Image } from './styles'

const ImageComponent = ({ src, alt, width, height, isIcon, isGray, isPickerActive }) =>
  <Image 
    src={src}
    alt={alt}
    width={width}
    height={height}
    isIcon={isIcon}
    isGray={isGray}
    isPickerActive={isPickerActive}/>

ImageComponent.propTypes = {
  src: string,
  alt: string,
  width: string,
  height: string,
  isIcon: bool,
  isGray: bool,
  isPickerActive: bool
}

export default ImageComponent

