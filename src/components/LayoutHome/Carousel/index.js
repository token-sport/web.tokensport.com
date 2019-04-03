import React, { useState } from 'react';
import { string, object } from 'prop-types'

// COMPONENTS
import ItemTimeline from 'components/shared/ItemTimeline';
import Image from 'components/shared/Image';
import Description from 'components/shared/Description';
import Title from 'components/shared/Title';

// STYLES
import {
  CarouselSection,
  Timeline,
  CarouselContainer,
  ArrowStyle,
  CarouselContent
} from './styles';

import arrow from 'assets/arrow-right.png'

const TimeLine = (itemsTimeline, current, handleClickItem) => (
  <Timeline>
    {
      itemsTimeline.map((item, index) =>
        <ItemTimeline
          key={item.id}
          color={item.color}
          isSelected={current.id === item.id}
          handleClickItem={handleClickItem}
          index={index} />)
    }
  </Timeline>
)

const Arrow = (handleClick, isRotate) => (
  <ArrowStyle isRotate={isRotate} onClick={() => handleClick()}>
    <Image src={arrow} height="30" width="30" isIcon={true} />
  </ArrowStyle>
)

const Carousel = ({ id, roadmapInfo }) => {
  const [indexCurrent, setCurrentIndex] = useState(0)
  // eslint-disable-next-line
  const [current, setCurrent] = useState(roadmapInfo.content[indexCurrent])
  const itemsTimeline = roadmapInfo.content.map((item) => ({ id: item.id, color: item.color }))

  const handleForward = () => {
    setCurrentIndex(indexCurrent < roadmapInfo.content.length - 1 ? indexCurrent + 1 : roadmapInfo.content.length - 1);
    setCurrent(roadmapInfo.content[indexCurrent])
  }

  const handleBackward = () => {
    setCurrentIndex(indexCurrent !== 0 ? indexCurrent - 1 : 0);
    setCurrent(roadmapInfo.content[indexCurrent])
  }

  const handleClickItem = index => {
    setCurrentIndex(index);
    setCurrent(roadmapInfo.content[indexCurrent])
  }

  return (
    <CarouselSection id={id}>
      <Title size="xlg" bold="700" margin="0 0 6% 0">{roadmapInfo.title}</Title>
      <CarouselContainer>

        {Arrow(handleBackward, true)}
        <CarouselContent>
          <Description size="md" bold="400" margin="0 0 50px 0">{roadmapInfo.content[indexCurrent].date}</Description>
          {
            roadmapInfo.content[indexCurrent].goals.map((goal, index) =>
              <Title key={index} size="lg" bold="600">{ goal }</Title>
            )
          }
        </CarouselContent>
        {Arrow(handleForward, false)}

      </CarouselContainer>
      {TimeLine(itemsTimeline, roadmapInfo.content[indexCurrent], handleClickItem)}
    </CarouselSection>
  );
}

Carousel.propTypes = {
  id: string,
  roadmapInfo: object
}

export default Carousel;
