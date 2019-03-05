import React, { useState } from 'react';
import { string } from 'prop-types'

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

// FIXTURES
import { ROADMAP } from 'fixture/';

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

const Carousel = ({ id }) => {
  const [indexCurrent, setCurrentIndex] = useState(0)
  const [current, setCurrent] = useState(ROADMAP[indexCurrent])
  const itemsTimeline = ROADMAP.map((item) => ({ id: item.id, color: item.color }))

  const handleForward = () => {
    setCurrentIndex(indexCurrent < ROADMAP.length - 1 ? indexCurrent + 1 : ROADMAP.length - 1);
    setCurrent(ROADMAP[indexCurrent])
  }

  const handleBackward = () => {
    setCurrentIndex(indexCurrent !== 0 ? indexCurrent - 1 : 0);
    setCurrent(ROADMAP[indexCurrent])
  }

  const handleClickItem = index => {
    setCurrentIndex(index);
    setCurrent(ROADMAP[indexCurrent])
  }

  return (
    <CarouselSection id={id}>
      <Title size="xlg" bold="700" margin="0 0 6% 0">Roadmap</Title>
      <CarouselContainer>

        {Arrow(handleBackward, true)}
        <CarouselContent>
          <Description size="md" bold="400" margin="0 0 50px 0">{ROADMAP[indexCurrent].date}</Description>
          <Title size="lg" bold="600">{ROADMAP[indexCurrent].title}</Title>
          <Description size="xsm" bold="400" width="50%" margin="20px 0 0 0">{ROADMAP[indexCurrent].description}</Description>
        </CarouselContent>
        {Arrow(handleForward, false)}

      </CarouselContainer>
      {TimeLine(itemsTimeline, ROADMAP[indexCurrent], handleClickItem)}
    </CarouselSection>
  )

}

Carousel.propTypes = {
  id: string
}

export default Carousel;
