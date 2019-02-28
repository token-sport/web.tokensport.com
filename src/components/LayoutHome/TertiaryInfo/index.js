import React from 'react';
import { string, object } from 'prop-types';

// COMPONENTS
import Title from 'components/shared/Title';
import Description from 'components/shared/Description';
import Image from 'components/shared/Image';

// STYLES
import { Container } from './styles';

import logo from 'assets/logo.png'

const TertiaryInfo = ({ image, altImage, title, description, width }) => (
  <Container width={width}>
    <Image src={image} alt={altImage} width="60px" height="60px" />
    <Title size="sm" bold="600" margin="10px 0 0 0">{title}</Title>
    <Description size="xsm" margin="5px 0 0 0">{description}</Description>
  </Container>
)

TertiaryInfo.defaultProps = {
  image: logo,
  width: 'auto'
}

TertiaryInfo.propTypes = {
  image: string,
  altImage: string,
  title: object,
  description: object,
  width: string
}

export default TertiaryInfo