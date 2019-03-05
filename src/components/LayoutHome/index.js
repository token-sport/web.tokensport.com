import React from 'react';

// COMPONENTS
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

// STYLES
import { Container, } from './styles';

// CONSTANTS
import { SECTIONS } from 'constants/sections';
import { INFO_SECTIONS } from 'constants/infoSections';

// UTILS
import { setInfos } from './utils';


const LayoutHome = () => (
  <Container>
    <Header />
    {
      SECTIONS.map((section, index) => {
        if (section.componentSide) {
          const infoSection = INFO_SECTIONS[section.info]
          return (
            <Section
              key={section.id}
              id={section.id}
              isReverse={section.isReverse}
              componentSide={section.componentSide(index !== 0 ? infoSection.image : '')}
              info={index === 0 ? section.components[0]() : setInfos(infoSection, section.components, section.isReverse)  }
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