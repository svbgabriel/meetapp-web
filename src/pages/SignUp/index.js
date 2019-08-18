import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, Form, LinkToSign } from './styles';

export default function SignUp() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <input type="text" placeholder="Nome completo" />
        <input type="text" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>
      </Form>
      <LinkToSign to="/">Já tenho login</LinkToSign>
    </Container>
  );
}
