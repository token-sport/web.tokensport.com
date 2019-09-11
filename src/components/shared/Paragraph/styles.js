import styled from 'styled-components';

export default styled.p`
  font-family: 'Nunito';
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

