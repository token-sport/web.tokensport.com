import React from 'react'
import { WordsColor } from 'components/LayoutHome/styles'

import logo from 'assets/logo.png'

import Image from 'components/shared/Image'

export const INFO_SECTIONS = {
  sectionTwo: {
    image: <Image src={logo} alt="logo" height="580" width="580" />,
    secondaryInfo: {
      title: <span>¿Qué rayos es <WordsColor color="neonBlue" >Token Sport?</WordsColor> </span>,
      description: <span>Es la primer Dapp (aplicación descentralizada) que permite a los usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain, tokenizar sus datos.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Aduéñate de tus datos',
      title: <span>Aduéñate de tus datos</span>,
      description: <span>A diferencia de las redes sociales, nosotros sabemos lo mucho que vale tu interacción en internet y por eso te devolvemos con creces todas las emociones que compartes con nosotros. ¡Todo porque te lo mereces!</span>
    }
  }
}