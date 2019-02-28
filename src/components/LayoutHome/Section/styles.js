import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-direction: ${({ isReverse }) => !isReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  padding: 100px;
  width: calc( 100% - 100px);
  padding: ${({ isReverse }) => !isReverse ? '100px 0 100px 100px' : '100px 100px 100px 0'};


  @media (max-width: 576.98px) {
    padding: 30px 0 30px 30px;
    width: calc( 100% - 60px);
    flex-direction: column;
    > div:first-child > img {
      width: 350px;
      height: 350px;
    }
  }
`

export const SideSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const InfoSection = styled.div`
  flex: 1;
`