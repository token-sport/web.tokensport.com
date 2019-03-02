import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-direction: ${({ isReverse }) => !isReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  margin: 100px;
  width: calc( 100% - 100px);
  margin: ${({ isReverse }) => !isReverse ? '100px 0 100px 100px' : '100px 100px 100px 0'};
  height: ${({ section }) => section === 0 ? '100vh' : 'auto'};;

  @media (max-width: 576.98px) {
    margin: 30px 0 30px 30px;
    width: calc( 100% - 60px);
    flex-direction: ${({ section }) => section === 10 ? 'column-reverse' : 'column'};
    > div:first-child > img {
      width: 350px;
      height: 350px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 40px 0 40px 40px;
    width: calc( 100% - 80px);
    flex-direction: ${({ section }) => section === 10 ? 'column-reverse' : 'column'};
    > div:first-child > img {
      width: 400px;
      height: 400px;
    }
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    width: calc( 100% - 100px);    
    margin: 50px 0 50px 50px;
    > div:first-child > img {
      width: 350px;
      height: 350px;
    }
    flex-direction: ${({ section }) => section === 10 ? 'column-reverse' : 'column'};
  }

  /* @media (max-width: 1040px) {
    > div:first-child > img {
      width: 400px;
      height: 400px;
    }
  } */
`

export const SideSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  > div {
    margin: 50px 0;
    padding: 30px 40px;
  }
  @media (max-width: 576.98px) {
    margin-top: 20%;
  }
`

export const InfoSection = styled.div`
  flex: 1;
`