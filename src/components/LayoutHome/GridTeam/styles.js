import styled from 'styled-components';

export const Container = styled.section.attrs((id) => ({ id }))`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  width: calc( 100% - 200px);
  margin: 100px;
  @media (max-width: 576.98px) {
    margin: 30px;
    width: calc( 100% - 60px);
    >div:nth-child(2) {
      font-weight: 400;
      font-size: ${({ theme }) => theme.size.font.xxsm};
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 30px 30px 150px 30px;
    width: calc( 100% - 60px);
    >div:nth-child(2) {
      font-weight: 400;
      font-size: ${({ theme }) => theme.size.font.xxsm};
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 50px 50px 120px 50px;
    width: calc( 100% - 100px);
    >div:nth-child(2) {
      font-weight: 400;
      font-size: ${({ theme }) => theme.size.font.xxsm};
    }
  }

`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  justify-content: center;
  justify-items: center;
  margin: 40px 0px;

  @media (max-width: 576.98px) {
    display: flex;
    justify-content: unset;
    overflow-x: scroll;
    white-space: nowrap;
    margin: 20px 0px;
    > div {
      padding: 25px 0px;
      > div {
        width: 360px;
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    justify-content: unset;
    overflow-x: scroll;
    white-space: nowrap;
    margin: 50px 0px;
    > div {
      padding: 25px 0px;
      > div {
        width: 360px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 340px);
  }
`

export const SubTitle = styled.span`
  width: 100%;
  text-align: center;
`