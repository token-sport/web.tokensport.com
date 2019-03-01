import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase; 
  border-radius: ${({ theme }) => theme.radius.soft};
  width: ${({ small }) => small ? '120px' : '170px'};
  height: 45px;
  font-family: ${ ({ theme }) => theme.family.nunito};
  background-color: ${({ transparent }) => transparent ? 'transparent' : 'unset'};
  background-image: ${({ transparent }) => transparent ? 'none' : 'linear-gradient(to right, #39b0e3, #2ea1d4, #2291c5, #1483b6, #0074a7)'}; 
  box-shadow: ${({ theme, transparent }) => transparent ? 'none' : theme.shadows.blue} ;
  color: white;
  border: ${({ transparent, theme }) => transparent ? `1px solid ${theme.colors.neonBlue}` : '0'};
  cursor: pointer;
  font-weight: 100;
  letter-spacing: 0.5px;
  margin: ${({ margin }) => margin};
  font-size: 14px;
  :active {
    transition: 500ms;
    transform: scale(0.9);
  }
  :focus {
    outline: none;
  }

  @media (max-width: 867px) {
    width: ${({ small }) => small ? '100px' : '120px'};
    height: 40px;
  }

  @media (mix-width: 1040px) {
    width: ${({ small }) => small ? '90px' : '140px'};
    height: 40px;
  }
  
`