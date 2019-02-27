import styled from 'styled-components';

export const Text = styled.div`
   font-size: ${ ({ size, theme }) => theme.size.font[size]};
   font-family: ${ props => props.theme.family.nunito};
   color: ${ ({ color, theme }) => color ? theme.colors[color] : 'white' };
   text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'normal'};
   font-weight: ${({ bold }) => bold ? bold : 'normal'} ;
   margin: ${({ margin }) => margin};
   display: flex;
   flex-direction: ${ ({ size }) => size === 'xlg' ? 'column' : 'unset'};
`