import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`

export const CircleImage = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ shadow, theme }) => `5px solid ${theme.colors[shadow]}`};
  box-shadow: ${({ shadow, theme }) => theme.shadows[shadow]}
`

export const Country = styled.span`
  font-family: ${({ theme }) => theme.family.nunito};
  font-size: ${({ theme }) => theme.size.font.xxsm};
  font-weight: 300;
  color: white;
`
