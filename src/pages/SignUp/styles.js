import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    height: 55px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    mix-blend-mode: normal;
    font-size: 18px;
    color: #ffffff;
    border-radius: 4px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }

  input {
    & + input {
      margin-top: 10px;
    }
  }

  button {
    margin-top: 10px;
    border: 0;
    background: #e5556e;
    border-radius: 4px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;

    &:hover {
      background: ${darken(0.2, '#e5556e')};
    }
  }
`;

export const LinkToSign = styled(Link)`
  margin-top: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
`;
