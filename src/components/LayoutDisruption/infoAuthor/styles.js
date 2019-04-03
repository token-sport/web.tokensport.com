import styled from 'styled-components';

export const InfoAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
`
export const ContactInfo = styled.div`
  margin-left: 30px;

  & div:nth-child(2) {
    font-weight: 400;
    margin-bottom: 5px;
  }

  & div:nth-child(3),
  & div:nth-child(4) {
    font-size: 12px;
  }
`

