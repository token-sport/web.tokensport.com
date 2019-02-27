import React from 'react'

import { Info, SubInfo } from './styles'

export const setInfos = (info, components) => (
  <Info>
    {components[0](info.secondaryInfo.title, info.secondaryInfo.description)}
    <SubInfo>
      {
        components.map((item, index) => {
          if (index !== 0) {
            const newInfo = info[`tertiaryInfo-${index}`]
            return item(index, newInfo.image, newInfo.title, newInfo.altImage, newInfo.description)
          }
        })
      }
    </SubInfo>
  </Info>
)
