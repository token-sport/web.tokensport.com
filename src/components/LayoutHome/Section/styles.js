import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-direction: ${({ isReverse }) => !isReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  /* padding: 50px 0; */
  width: calc( 100% - 200px);
  padding: 100px;
  width: calc( 100% - 100px);
  padding: ${({ isReverse }) => !isReverse ? '100px 0 100px 100px' : '100px 100px 100px 0'};
`

export const SideSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const InfoSection = styled.div`
  flex: 1;
`