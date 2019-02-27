import styled from 'styled-components';

export const Description = styled.div`
   font-size: ${({ size, theme }) => theme.size.font[size]};
   color: ${({ color, theme }) => color ? theme.colors[color] : theme.colors.gray};
   font-family: ${({ theme }) => theme.family.nunito};
   font-weight: ${({ bold }) => bold ? bold : '300'};
   margin: ${({ margin }) => margin};
   display: flex;
   flex-direction: ${({ direction }) => direction};
`