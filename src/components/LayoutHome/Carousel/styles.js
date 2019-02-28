import styled from 'styled-components';

export const CarouselSection = styled.section`
  width: calc(100% - 200px);
  padding: 100px;
  > div:first-child {
    text-align: center;
  }
`

export const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 75% 50px;
  justify-content: center;
  align-items: center;
  margin: 0 0 80px 0;
`

export const ArrowStyle = styled.div.attrs((onClick) => ({
  onClick
}))`
  transform: ${({ isRotate }) => isRotate ? 'rotate(180deg)' : 'rotate(0)'};
  cursor: pointer;
  padding: 10px;
`

export const CarouselContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 230px;
  > div:last-child {
    width: 50%;
  }
`

export const Timeline = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2e3a4e;
  > div:last-child {
    margin: 0;
  }

  > div {
    margin: 0 40px 0 0;
  }
`
