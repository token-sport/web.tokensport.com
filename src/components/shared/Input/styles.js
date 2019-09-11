import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

`

export const Label = styled.span`
  font-family: ${({ theme }) => theme.family.nunito};
  font-weight: 300;
  color: white;
  font-size: 14px;
  margin: 20px 0 5px 7px;
`

export const Input = styled.input.attrs(({ type, value, name, onChange }) => ({
  type,
  value,
  name,
  onChange
}))`
  font-family: ${({ theme }) => theme.family.nunito};
  border-radius: 110px;
  border: 0;
  background-color: #384C6A;
  color: white;
  font-size: 14px;
  padding: 10px;
  width: ${({ width }) => width};
  :focus {
    outline: none;
  }

  @media (max-width: 576.98px) {
    width: 100%;
  } 
`