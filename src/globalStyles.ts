import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange: #D26503;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #F9F8F8;
  }

  .container {
    width: 90%;
    max-width: 1050px;
    margin: 0 auto;

    display: flex;
  }
`;
