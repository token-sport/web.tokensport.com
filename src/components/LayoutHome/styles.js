import styled from 'styled-components';

export const Container = styled.div`
   padding: 10;
   background: ${props => props.theme.colors.background}
`

export const WordsColor = styled.span`
   color:  ${ ({ color, theme: { colors } }) => colors[color]}
`

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 65px;
`

export const SubInfo = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;
   margin: 30px 0;
`