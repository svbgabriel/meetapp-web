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

    > div {
      height: 1px;
      width: 100%;
      background-color: #ffffff;
      opacity: 0.1;
      margin: 10px 0;
    }

    input {
      width: 100%;
      flex: 1;
      height: 55px;
      padding: 10px;
      background: rgba(0, 0, 0, 0.2);
      mix-blend-mode: normal;
      font-size: 18px;
      color: #ffffff;
      border-radius: 4px;
      border: 0;

      & + input {
        margin-top: 10px;
      }
    }

    span {
      color: rgba(255, 255, 255, 0.3);
      margin: 10px 0;
      font-weight: bold;
    }

    button {
      display: flex;
      align-items: center;
      margin-top: 20px;
      border: 0;
      background: #e5556e;
      border-radius: 4px;
      height: 50px;
      padding: 0 10px;
      max-width: 150px;

      font-size: 18px;
      font-weight: bold;
      color: #ffffff;

      &:hover {
        background: ${darken(0.2, '#e5556e')};
      }
    }
  }
`;
