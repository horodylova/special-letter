import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../assets/background_picture.jpeg";  

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f6f1;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;  
  }

   body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(249, 246, 241, 0.7);  
    z-index: -1;
  }

   main, section, div {
    position: relative;
    z-index: 1;
  }
`;