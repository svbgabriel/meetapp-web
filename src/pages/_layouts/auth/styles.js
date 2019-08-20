import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    margin-top: 40px;
    width: 100%;
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
      border: 0;
    }

    span {
      color: rgba(255, 255, 255, 0.3);
      margin: 10px 0;
      font-weight: bold;
    }

    input {
      & + input {
        margin-top: 10px;
      }
    }

    button {
      margin: 10px 0;
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
  }

  a {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
