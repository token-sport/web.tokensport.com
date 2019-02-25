import React from 'react'
import { string } from 'prop-types'

// COMPONENTS
import Image from 'components/shared/Image';
import Text from 'components/shared/Title';

// STYLES
import { CircleImage, Country, Container } from './styles'

const InfoUser = ({ image, name, profession, country, shadow }) => (
  <Container>
    <CircleImage shadow={shadow}>
      <Image src={image} alt={name} height="100px" width="100px" />
    </CircleImage>
    <Text margin="20px 0 0" size="xmd" bold="600">{name}</Text>
    <Text size="xsm">{profession}</Text>
    <Country>{country}</Country>
  </Container>
)

InfoUser.defaultProps = {
  shadow: 'neonGreen'
}

InfoUser.propTypes = {
  image: string,
  name: string,
  profession: string,
  country: string,
  shadow: string
}

export default InfoUser
