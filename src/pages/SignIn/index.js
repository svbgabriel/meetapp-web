import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, Form, LinkToSign } from './styles';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <input type="text" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Entrar</button>
      </Form>
      <LinkToSign to="/signup">Criar conta grátis</LinkToSign>
    </Container>
  );
}
