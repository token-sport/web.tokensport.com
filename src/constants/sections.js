import React from 'react'

// COMPONENTS
import Image from 'components/shared/Image';
import MainInfo from 'components/LayoutHome/MainInfo';
import SecondaryInfo from 'components/LayoutHome/SecondaryInfo';
import TertiaryInfo from 'components/LayoutHome/TertiaryInfo';

// IMAGES
import logo from 'assets/logo.png'

export const SECTIONS = [
  {
    id: 0,
    isMainInfo: true,
    components: [() => <MainInfo />],
    image: <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: false
  },
  {
    id: 1,
    isMainInfo: false,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} />,
      (logo, title, altImage, description) => <TertiaryInfo image={logo} altImage={altImage} title={title} description={description} />,
      (logo, title, altImage, description) => <TertiaryInfo image={logo} altImage={altImage} title={title} description={description} />,
    ],
    image: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: true,
    info: 'sectionTwo'
  },
  {
    id: 2,
    isMainInfo: false,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    image: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: false,
    info: 'sectionTree'
  },
]