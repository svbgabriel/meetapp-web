import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: linear-gradient(180deg, #22202C 0%, #402845 100%);
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
