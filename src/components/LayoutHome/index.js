import React from 'react'

// COMPONENTS
import Section from './Section';
import Footer from './Footer';

// STYLES
import { Container, } from './styles';

// CONSTANTS
import { SECTIONS } from 'constants/sections'
import { INFO_SECTIONS } from 'constants/infoSections'

// UTILS
import { setInfos } from './utils';


const LayoutHome = () => (
  <Container>
    {
      SECTIONS.map((section, index) => {
        if (section.isMainInfo !== undefined) {
          const infoSection = INFO_SECTIONS[section.info]
          return (
            <Section
              key={section.id}
              isReverse={section.isReverse}
              image={index === 0 ? section.image : infoSection.image}
              info={index === 0 ? section.components[0]() : setInfos(infoSection, section.components)}
            />
          )
        }
        return section.component(section.id)
      })
    }
    <Footer />
  </Container>
)

export default LayoutHome;