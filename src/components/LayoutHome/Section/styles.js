import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: ${({ isReverse }) => !isReverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`

export const ImageSection = styled.div`
  flex: 1;
  text-align: center;
`

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`