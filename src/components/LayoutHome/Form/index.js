import React from 'react'
import { func, string } from 'prop-types'

// COMPONENTS
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import Title from 'components/shared/Title';

// STYLES
import { Container } from './styles'

const FormHome = ({ onChange, name, lastname, email, submitForm }) => (
  <Container>
    <Title size="lg" bold="600">¡Únete!</Title>
    <div className="content">
      <Input
        label="Nombre"
        value={name}
        onChange={onChange}
        name="nameForm"
        type="text"
        width="300px" />
      <Input
        label="Apellido"
        value={lastname}
        onChange={onChange}
        name="lastNameForm"
        type="text"
        width="300px" />
      <Input
        label="Email"
        value={email}
        onChange={onChange}
        name="emailForm"
        type="email"
        width="300px" />
      <Button text="Unirse" small margin="30px 0 0 0" onClick={(event) => submitForm(event)} />
    </div>
  </Container>
)

FormHome.propTypes = {
  onChange: func,
  name: string,
  lastname: string,
  email: string,
  submitForm: func
}


export default FormHome