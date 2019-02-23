import styled from 'styled-components';

export const Text = styled.h1`
   font-size: ${ ({ size, theme: { size: { font } } }) =>
    size === 'xlg' ? font.xlg : size === 'lg' ? font.lg : font.sm};
   font-family: ${ props => props.theme.family.nunito};
   color: white
`