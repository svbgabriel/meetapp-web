import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 40px auto;

  img {
    height: 300px;
    max-width: 940px;
    margin-bottom: 25px;
  }

  > p {
    font-family: Roboto;
    font-size: 18px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 30px;
    word-wrap: break-word;
    max-width: 940px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;

  > p {
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #ffffff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Edit = styled.button`
  display: flex;
  align-items: center;
  background: #4dbaf9;
  border-radius: 4px;
  border: 0;
  height: 42px;
  padding: 0 20px;
  margin-right: 15px;

  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  &:hover {
    background-color: ${darken(0.2, '#4DBAF9')};
  }
`;

export const Cancel = styled.button`
  display: flex;
  align-items: center;
  background: #f94d6a;
  border-radius: 4px;
  border: 0;
  height: 42px;
  padding: 0 20px;

  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  &:hover {
    background-color: ${darken(0.2, '#d44059')};
  }
`;

export const TextContainer = styled.div`
  display: flex;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  > p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: #ffffff;
    opacity: 0.6;
  }
`;
