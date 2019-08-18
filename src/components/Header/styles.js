import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  background: rgba(0, 0, 0, 0.3);
  mix-blend-mode: normal;
  width: 100%;

  img {
    height: 30px;
    width: 30px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;

  button {
    background-color: #d44059;
    height: 42px;
    width: 70px;
    border: 0;
    border-radius: 4px;

    font-size: 16px;
    line-height: 19px;
    color: #ffffff;

    &:hover {
      background-color: ${darken(0.2, '#d44059')};
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;

  p {
    font-family: Roboto, sans-serif;
    color: #ffffff;
  }
`;

export const Profile = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #999999;
`;
