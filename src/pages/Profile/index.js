import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

// TODO: Ver uma maneira de não deixar passar se a senha antiga não for preenchida
const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'A nova senha deve ter no mínimo 6 caracteres')
          .required('Você deve informar a nova senha')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required()
          .min(6, 'A nova senha deve ter no mínimo 6 caracteres')
          .oneOf(
            [Yup.ref('password')],
            'A nova senha e a confirmação devem ser iguais'
          )
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <>
      <Container>
        <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome Completo" />
          <Input name="email" placeholder="E-mail" />
          <div />
          <Input name="oldPassword" type="password" placeholder="Senha atual" />
          <Input name="password" type="password" placeholder="Nova senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirmação de senha"
          />
          <button type="submit">
            <MdAddCircleOutline
              style={{ marginRight: 10 }}
              size={20}
              color="#ffffff"
            />{' '}
            Salvar perfil
          </button>
        </Form>
      </Container>
    </>
  );
}
