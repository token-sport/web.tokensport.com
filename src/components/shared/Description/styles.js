import styled from 'styled-components';

export const Description = styled.span`
   font-size: ${({ size, theme }) => theme.size.font[size]};
   color: ${({ theme }) => theme.colors.gray};
   font-family: ${({ theme }) => theme.family.nunito};
   font-weight: 100;
`