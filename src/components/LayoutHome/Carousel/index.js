import React, { useState, useEffect } from 'react';

// COMPONENTS
import ItemTimeline from 'components/shared/ItemTimeline';

// STYLES
import { CarouselSection, Timeline } from './styles';

// FIXTURES
import { ROADMAP } from 'fixture/';

const TimeLine = (itemsTimeline, current) => (
  <Timeline>
    {
      itemsTimeline.map((item) =>
        <ItemTimeline 
          key={item.id}
          color={item.color}
          isSelected={ current.id === item.id } />)
    }
  </Timeline>
)
 
const Carousel = () => {
  const [current, setCurrent] = useState(ROADMAP[0])
  const itemsTimeline = ROADMAP.map((item) => ({ id: item.id, color: item.color }))

  const handleClickItem = () => {

  }

  return (
    <CarouselSection>
      {TimeLine(itemsTimeline, current)}
    </CarouselSection>
  )
}

export default Carousel;
