import React from 'react'

// COMPONENTS
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import Title from 'components/shared/Title';

// STYLES
import { Container } from './styles'

const FormHome = () => (
  <Container>
    <Title size="lg" bold="600">¡Únete!</Title>
    <div className="content">
      <Input
        label="Nombre"
        value=""
        name="name"
        type="text"
        width="300px" />
      <Input
        label="Apellido"
        value=""
        name="lastname"
        type="text"
        width="300px" />
      <Input
        label="Email"
        value=""
        name="email"
        type="email"
        width="300px" />
      <Button text="Unirse" small margin="30px 0" />
    </div>
  </Container>
)


export default FormHome