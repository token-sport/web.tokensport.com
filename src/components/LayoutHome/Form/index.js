import React from 'react';
import { func, string, object } from 'prop-types';

// COMPONENTS
import Card from 'components/shared/Cards';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import Title from 'components/shared/Title';

// STYLES
import { Container } from './styles';

const FormHome = ({ onChange, name, lastname, email, submitForm, info }) => {
  return(
    <Card padding="50px" withGradient={true} showInHover={false}>
      <Container>
        <Title size="lg" bold="600">{info.form.title}</Title>
        <div className="content">
          <Input
            label={info.form.nameInput}
            value={name}
            onChange={onChange}
            name="nameForm"
            type="text"
            width="300px" />
          <Input
            label={info.form.surnameInput}
            value={lastname}
            onChange={onChange}
            name="lastNameForm"
            type="text"
            width="300px" />
          <Input
            label={info.form.emailInput}
            value={email}
            onChange={onChange}
            name="emailForm"
            type="email"
            width="300px" />
          <Button text={info.form.copyButton} small margin="30px 0 0 0" onClick={(event) => submitForm(event)} />
        </div>
      </Container>
    </Card>
  );}

FormHome.propTypes = {
  onChange: func,
  name: string,
  lastname: string,
  email: string,
  submitForm: func,
  info: object
}

export default FormHome;

