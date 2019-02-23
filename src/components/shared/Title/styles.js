import styled from 'styled-components';

export const Text = styled.h1`
   font-size: ${ ({ size, theme: { size: { font } } }) => font[size]};
   font-family: ${ props => props.theme.family.nunito};
   color: white
`