import styled from 'styled-components';

export const Text = styled.div`
  width: ${({ isHero }) => isHero ? '37vw' : 'auto'};
  font-size: ${ ({ size, theme }) => theme.size.font[size]};
  font-family: ${ props => props.theme.family.nunito};
  color: ${ ({ color, theme }) => color ? theme.colors[color] : 'white'};
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'normal'};
  font-weight: ${({ bold }) => bold ? bold : 'normal'} ;
  margin: ${({ margin }) => margin};
  display: flex;
  flex-direction: ${ ({ size }) => size === 'xlg' ? 'column' : 'unset'};

  @media (max-width: 576.98px) {
    font-size: ${ ({ size, theme }) => size === 'xlg' ? theme.size.font['lg'] : size === 'lg' ? theme.size.font['md'] : theme.size.font[size]};
    width: ${({ isHero }) => isHero ? '80vw' : 'auto'}
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: ${({ isHero }) => isHero ? '80vw' : 'auto'}
    font-size: ${ ({theme }) => theme.size.font['lg']};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: ${({ isHero }) => isHero ? '80vw' : 'auto'}
  }
`