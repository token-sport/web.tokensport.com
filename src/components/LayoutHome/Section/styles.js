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

  > div:first-child > img {
    position: ${({ section }) => section === 0 ? 'absolute' : 'unset'};
    top: 0;
    left: 20%;
  }

  @media (max-width: 576.98px) {
    margin: 30px 0 30px 30px;
    width: calc( 100% - 60px);
    flex-direction: ${({ section }) => section === 10 ? 'column-reverse' : 'column'};
    > div:first-child > img {
      width: 100%;
      height: ${({ section }) => section === 0 ? '70%' : '100%'};
      left: 0;
      margin: ${({ section }) => section === 1 ? '0 0 50px 0' : '0 0 50px 0'};
    }
  }

  @media (min-height: 650px) and (max-height: 720px) {
    > div:first-child {
      margin: ${({ section }) => section === 0 ? '10vh 0 50px 0' : '0 0 50px 0'};
    }
  }

  @media (min-height: 721px) and (max-height: 850px) {
    > div:first-child {
      margin: ${({ section }) => section === 0 ? '20vh 0 50px 0' : '0 0 50px 0'};
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 40px 0 40px 40px;
    width: calc( 100% - 80px);
    flex-direction: ${({ section }) => section === 10 ? 'column-reverse' : 'column'};
    > div:first-child > img {
      width: ${({ section }) => section === 0 ? '100%' : '80%'} ;
      height: ${({ section }) => section === 0 ? '70%' : '80%'} ;
      left: 0;
      margin: ${({ section }) => section === 1 ? '100px 0 60px 0' : '0 0 60px 0'};
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc( 100% - 100px);
    flex-direction: ${({ section }) => section === 10 ? 'column-reverse' : 'column'};
    margin: 50px 0 50px 50px;

    > div:first-child > img {
      width: 70%;
      height: 70%;
      margin: ${({ section }) => section === 1 ? '100px 0 60px 0' : '0 0 60px 0'};
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: calc( 100% - 100px);
    margin: 50px 0 50px 50px;

    > div:first-child > img {
      width: ${({ section }) => section === 0 ? '100%' : '90%'} ;
      height: 90%;
      margin: ${({ section }) => section === 1 ? '100px 0 60px 0' : '0 0 60px 0'};
    }
  }
`

export const SideSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  > div {
    margin: 50px 0;
    padding: 30px 40px;
  }
`

export const InfoSection = styled.div`
  flex: 1;

  @media (max-width: 576.98px) {
    > div {
      margin: 0;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    > div {
      margin: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    > div {
      margin: 0;
    }
  }
`