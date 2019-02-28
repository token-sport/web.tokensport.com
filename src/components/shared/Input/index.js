import React from 'react';
import { string, func } from 'prop-types';

// STYLES
import { Input, Container, Label } from './styles'

const InputComponent = ({ label, type, name, value, onChange, width }) => (
  <Container>
    <Label>{label}</Label>
    <Input type={type} name={name} value={value} onChange={onChange} width={width} />
  </Container>
)

InputComponent.defaultProps = {
  width: 'auto'
}

InputComponent.propTypes = {
  label: string,
  type: string,
  name: string,
  value: string,
  onChange: func,
  width: string
}

export default InputComponent




