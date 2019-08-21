import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 900px;
    margin: 0 30px;

    > textarea {
      font-family: Roboto, sans-serif;
      width: 100%;
      flex: 1;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      padding: 10px;
      font-size: 18px;
      height: 200px;
      margin-bottom: 10px;
      resize: none;
      color: #ffffff;
    }

    > input {
      width: 100%;
      flex: 1;
      height: 50px;
      max-height: 50px;
      padding: 10px;
      background: rgba(0, 0, 0, 0.2);
      mix-blend-mode: normal;
      font-size: 18px;
      color: #ffffff;
      border-radius: 4px;
      border: 0;
      margin-bottom: 10px;
    }

    > button {
      display: flex;
      align-items: center;
      margin-top: 20px;
      border: 0;
      background: #e5556e;
      border-radius: 4px;
      height: 42px;
      padding: 0 10px;
      max-width: 180px;

      font-size: 16px;
      font-weight: bold;
      color: #ffffff;

      &:hover {
        background: ${darken(0.2, '#e5556e')};
      }
    }
  }
`;
