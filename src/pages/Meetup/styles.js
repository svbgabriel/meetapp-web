import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  max-width: 940px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 940px;

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

    span {
      color: rgba(255, 255, 255, 0.3);
      margin: 10px 0;
      font-weight: bold;
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
