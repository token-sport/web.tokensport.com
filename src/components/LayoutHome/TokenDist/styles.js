import styled from 'styled-components';

export const TokenDistSection = styled.section`
  width: calc(100% - 200px);
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 576.98px) {
    padding: 100px 30px;
    width: calc( 100% - 60px);
    > div:first-child {
      margin: 0 0 40px 0;
      text-align: center;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    > div:first-child {
      text-align: center;
    }

    > div:last-child {
      justify-content: space-evenly;
    }
  }
`

export const TokenDistContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  justify-items: center;
  > div {
      text-align: center;
  }

  @media (max-width: 576.98px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 40%);
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc( 100vw - 60px );
  }
`
