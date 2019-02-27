import React from 'react'

// COMPONENTS
import Section from './Section';

// STYLES
import { Container, Info, SubInfo } from './styles';

// CONSTANTS
import { SECTIONS } from 'constants/sections'
import { INFO_SECTIONS } from 'constants/infoSections'

const setInfos = (info, components) => {
  console.log(components)
  return (
    <Info>
      {components[0](info.secondaryInfo.title, info.secondaryInfo.description)}
      <SubInfo>
        {
          components.map((item, index) => {
            if (index !== 0) {
              const info = info[`tertiaryInfo-${index}`]
              item(index, info.image, info.title, info.altImage, info.description)
            }
            return <div key={index} />
          })
        }
      </SubInfo>
    </Info>
  )
}

const LayoutHome = () => (
  <Container>
    {
      SECTIONS.map((section, index) => {
        const infoSection = INFO_SECTIONS[section.info]
        return (
          <Section
            key={section.id}
            isReverse={section.isReverse}
            image={index === 0 ? section.image : infoSection.image}
            info={index === 0 ? section.components[0]() : setInfos(infoSection, section.components)}
          />
        )
      })
    }
  </Container>
)

export default LayoutHome