import React from 'react';

// STYLES
import { ContainerPartners, ImagePartner, ContentPartners } from './styles'

// COMPONENTS
import Title from 'components/shared/Title'
import Description from 'components/shared/Description'
import Image from 'components/shared/Image'

// FIXTURE
import { PARTNERS } from 'fixture/'

const Partners = () => (
  <ContainerPartners>
    <Title size="xlg" bold="700"><span>Partners & Amigos</span></Title>
    <Description color="white" size="xmd" direction="column"><span>¿Quiénes apoyan y confían en Token Sport?</span></Description>
    <ContentPartners>
      {
        PARTNERS.map((item, index) => <ImagePartner key={index}>
          <Image src={item.photo} alt={item.name} height="100%" width="100%" isIcon />
        </ImagePartner>)
      }
    </ContentPartners>
  </ContainerPartners>
)

export default Partners