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
  label: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  width: string
}

export default InputComponent




