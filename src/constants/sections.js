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
import Partners from 'components/LayoutHome/Partners'


// CONTANTS
import { team as TEAM } from 'fixture/'

export const SECTIONS = [
  {
    id: 0,
    components: [() => <MainInfo />],
    componentSide: () => <Image src="https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokeniza-tus-emociones%402x.png?alt=media&token=e05753f2-859f-451e-9160-0611e4a3272e" alt="logo" height="100%" width="100%" isIcon />,
    isReverse: false
  },
  {
    id: 1,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="Que rayos es token sport" height="500px" width="500px" isIcon />,
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
    componentSide: logo => <Image src={logo} alt="Comparte tus emociones" height="580px" width="580px" isIcon />,
    isReverse: false,
    info: 'sectionThree'
  },
  {
    id: 3,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="85%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: logo => <Image src={logo} alt="Salimos en tv" height="580px" width="580px" isIcon />,
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
    componentSide: logo => <Image src={logo} alt="Tokenizamos" height="550px" width="550px" isIcon />,
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
    componentSide: logo => <Image src={logo} alt="Comunidad" height="580px" width="580px" isIcon />,
    isReverse: true,
    info: 'sectionSix'
  },
  {
    id: 6,
    component: (key, id) => <Carousel key={key} id={id} />
  },
  {
    id: 7,
    component: key => <TokenDist key={key} />
  },
  {
    id: 8,
    component: (key, id) => <GridTeam key={key} id={id} team={TEAM} />
  },
  {
    id: 9,
    component: key => <Partners key={key} />
  },
  {
    id: 10,
    components: [
      (title, description) => <SecondaryInfo title={title} description={description} widthDescription="90%" />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
      (key, logo, title, altImage, description) => <TertiaryInfo key={key} image={logo} altImage={altImage} title={title} description={description} />,
    ],
    componentSide: (onChange, name, lastname, email, submitForm) => (
      <Card padding="50px" withGradient={true} showInHover={false}>
        <Form onChange={onChange} name={name} lastname={lastname} email={email} submitForm={submitForm}/>
      </Card>),
    isReverse: true,
    info: 'sectionEleven'
  },
]