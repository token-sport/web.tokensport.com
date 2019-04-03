import React from 'react';
import { object } from 'prop-types';

// COMPONENTS
import Description from 'components/shared/Description';
import CircleImage from 'components/shared/CircleImage';
import Image from 'components/shared/Image';

// STYLES
import { InfoAuthorContainer, ContactInfo} from './styles';

const InfoAuthor = ({ author }) =>
  <InfoAuthorContainer>
    <CircleImage shadow={author.shadow} width="80px" height="80px">
      <Image src={author.image} alt={author.name} height="80px" width="80px" isGray/>
    </CircleImage>
    <ContactInfo>
      <Description size="sm" color="white" bold="700">{author.name}</Description>
      <Description size="xsm" color="white">{author.role}</Description>
      <Description size="xxsm" color="white">{author.network}</Description>
      <Description size="xxsm" color="white">{author.mail}</Description>
    </ContactInfo>
  </InfoAuthorContainer>;

InfoAuthor.propTypes = {
  author: object
}

export default InfoAuthor;

