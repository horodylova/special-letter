import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden; 
  }

  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f6f1;
  }
`;
