import React from 'react'
import { string, array } from 'prop-types'

// COMPONENTS
import Image from 'components/shared/Image';
import Text from 'components/shared/Title';
import Networks from 'components/shared/Network';
import CircleImage from 'components/shared/CircleImage';

// STYLES
import { Country, Container } from './styles'

const InfoUser = ({ image, name, profession, country, shadow, networks }) => (
  <Container>
    <CircleImage shadow={shadow} width="100px" height="100px">
      <Image src={image} alt={name} height="100px" width="100px" isGray />
    </CircleImage>
    <Text margin="20px 0 0" size="xmd" bold="600">{name}</Text>
    <Text size="xsm">{profession}</Text>
    <Country>{country}</Country>
    <Networks networks={networks} width="17px" height="17px" margin="60px 0 0 0" />
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
  shadow: string,
  networks: array
}

export default InfoUser
