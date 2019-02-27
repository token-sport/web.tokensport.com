import React from 'react';
import { string } from 'prop-types';

// COMPONENTS
import Image from 'components/shared/Image';

// STYLES
import IconContainer from './styles';

const Icon = ({ network, name, width, height, link }) => <IconContainer href={link} target="_blank">
  <Image src={network} width={width} height={height} alt={name}/>
</IconContainer>

Icon.propTypes = {
  network: string,
  width: string,
  height: string,
  name: string,
  link: string
}

export default Icon;
