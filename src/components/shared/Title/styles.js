import styled from 'styled-components';

export const Text = styled.h1`
   font-size: ${ ({ size, theme }) => theme.size.font[size]};
   font-family: ${ props => props.theme.family.nunito};
   color: white;
   text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'normal'};
   font-weight: ${({ bold }) => bold ? bold : 'normal'} ;
`