import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import Header from '../../components/Header';
import { Container, Form } from './styles';

export default function Profile() {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <input type="text" name="Nome" />
          <input type="text" name="Email" />
          <div />
          <input type="password" placeholder="Senha atual" />
          <input type="password" placeholder="Nova senha" />
          <input type="password" placeholder="Confirmação de senha" />
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
