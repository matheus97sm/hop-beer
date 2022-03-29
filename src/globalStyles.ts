import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange: #D26503;
    --brown: #660201;
    --black: #240000;
    --grey: #A79999;
    --shadow: 0 3px 32px #24000016;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #F9F8F8;
    font-size: 16px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 90%;
    max-width: 1340px;
    margin: 0 auto;

    display: flex;
  }
`;
