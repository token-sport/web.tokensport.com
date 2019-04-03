import React from 'react';
import { object } from 'prop-types';

// STYLES
import { ContainerPartners, ImagePartner, ContentPartners } from './styles';

// COMPONENTS
import Title from 'components/shared/Title';
import Description from 'components/shared/Description';
import Image from 'components/shared/Image';

// CONSTANTS
import PARTNERSIMAGE from 'constants/partners';

const Partners = ({ partnersInfo }) => (
  <ContainerPartners>
    <Title size="xlg" bold="700"><span>{partnersInfo.title}</span></Title>
    <Description color="white" size="xmd" direction="column"><span>{partnersInfo.description}</span></Description>
    <ContentPartners>
      {
        PARTNERSIMAGE.map((item, index) => <ImagePartner key={index}>
          <Image src={item.photo} alt={item.name} height="100%" width="100%" isIcon />
        </ImagePartner>)
      }
    </ContentPartners>
  </ContainerPartners>
);

Partners.propTypes = {
  partnersInfo: object
}

export default Partners;