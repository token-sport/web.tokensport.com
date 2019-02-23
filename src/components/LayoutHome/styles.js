import styled from 'styled-components';

export const Container = styled.div`
   padding: 10;
   background: ${props => props.theme.colors.background}
`

export const WordsColor = styled.span`
   color:  ${ ({ color, theme: { colors } }) => colors[color]}
`