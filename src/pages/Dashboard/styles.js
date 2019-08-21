import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;

  > p {
    color: #ffffff;
    font-size: 32px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    line-height: 37px;
  }

  > button {
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
  }
`;

export const MeetupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  mix-blend-mode: normal;
  border-radius: 4px;
  height: 62px;
  padding: 0 20px;
  width: 100%;
  max-width: 900px;
`;

export const Title = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.6;
`;
