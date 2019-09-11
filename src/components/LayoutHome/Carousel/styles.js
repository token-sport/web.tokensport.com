import styled from 'styled-components';

export const CarouselSection = styled.section.attrs((id) => ({ id }))`
  width: calc(100% - 200px);
  margin: 100px;

  > div:first-child {
    text-align: center;
    margin: 3em 0 .5em 0;
  }

  @media (max-width: 576.98px) {
    margin: 30px;
    width: calc( 100% - 60px);

    > div:first-child {
      margin: 3em 0 2em 0;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 120px 40px 40px 40px;
    width: calc( 100% - 80px);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 120px 50px 50px 50px;
    width: calc( 100% - 100px);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    > div:first-child {
      margin: 0 0 1em 0;
    }
  }
`

export const CarouselContainer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 50px 75% 50px;
  justify-content: center;
  align-items: center;
  margin: 0 0 2em 0;

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 0 0 1em 0;
  }
`

export const ArrowStyle = styled.div.attrs((onClick) => ({
  onClick
}))`
  transform: ${({ isRotate }) => isRotate ? 'rotate(180deg)' : 'rotate(0)'};
  cursor: pointer;
  padding: 10px;

  @media (max-width: 576.98px) {
    padding: 20px;
    align-self: baseline;
  }
`

export const CarouselContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 50vh;

  > div {
    margin-bottom: 1em;
  }

  > div:first-child {
    margin-bottom: 70px;
  }

  @media (max-width: 576.98px) {
    height: 40vh;

    > div {
      font-size: ${({ theme }) => theme.size.font.sm}
    }

    > div:first-child {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    > div {
      font-size: ${({ theme }) => theme.size.font.sm}
    }

    > div:first-child {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      font-size: ${({ theme }) => theme.size.font.md}
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
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
  @media (max-width: 576.98px) {
    > div {
      margin: 0 15px 0 0;
    }
  }
`
