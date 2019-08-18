import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, ProfileContainer, TextContainer, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ProfileContainer>
        <TextContainer>
          <p>Gabriel Batista</p>
          <Profile to="/profile">Meu Perfil</Profile>
        </TextContainer>
        <button type="button">Sair</button>
      </ProfileContainer>
    </Container>
  );
}
