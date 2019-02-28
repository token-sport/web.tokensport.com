import React from 'react'

// COMPONENTS
import Image from 'components/shared/Image';
import MainInfo from 'components/LayoutHome/MainInfo';
import SecondaryInfo from 'components/LayoutHome/SecondaryInfo';
import TertiaryInfo from 'components/LayoutHome/TertiaryInfo';
import GridTeam from 'components/LayoutHome/GridTeam';
import TokenDist from 'components/LayoutHome/TokenDist';
import Card from 'components/shared/Cards'
import Form from 'components/LayoutHome/Form'
import Carousel from 'components/LayoutHome/Carousel'

// IMAGES
import logo from 'assets/logo.png'

// CONTANTS
import { team as TEAM } from 'fixture/'

export const SECTIONS = [
  {
    id: 0,
    components: [() => <MainInfo />],
    componentSide: () => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: false
  },
  {
    id: 1,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: true,
    info: 'sectionTwo'
  },
  {
    id: 2,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="85%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: false,
    info: 'sectionThree'
  },
  {
    id: 3,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="85%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: true,
    info: 'sectionFour'
  },
  {
    id: 4,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="85%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: false,
    info: 'sectionFive'
  },
  {
    id: 5,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="90%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="logo" height="580" width="580" />,
    isReverse: true,
    info: 'sectionSix'
  },
  {
    id: 6,
    component: key => <Carousel key={key} />
  },
  {
    id: 7,
    component: key => <TokenDist key={key} />
  },
  {
    id: 8,
    component: key => <GridTeam key={key} team={TEAM} />
  },
  {
    id: 10,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="90%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: () => (<Card padding="50px" withGradient={true} showInHover={false}>
      <Form />
    </Card>),
    isReverse: true,
    info: 'sectionEleven'
  },
]