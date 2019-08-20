import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';
import { Container, ProfileContainer, TextContainer, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <ProfileContainer>
        <TextContainer>
          <p>{profile.name}</p>
          <Profile to="/profile">Meu Perfil</Profile>
        </TextContainer>
        <button onClick={handleSignOut} type="button">
          Sair
        </button>
      </ProfileContainer>
    </Container>
  );
}
