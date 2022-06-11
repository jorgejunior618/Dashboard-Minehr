import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    font-size: 14px;
    transition-duration: .4s;
    box-sizing: border-box;
    overflow-x: hidden;
    list-style: none;
    color: ${({ theme }) => theme.colors.fontColor};
  }
  a, h1, h2, h3, p, strong, span {
    text-decoration: none;
    color: currentColor;
  }
  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.primaria};
  }
  body {
    background-color: ${({ theme }) => theme.colors.backgroundAlternativo};
    display: flex;
    height: 100vh;
    padding-top: 90px;
  }
  input, button, textarea, select {
    font-family: Arial, Helvetica, sans-serif;
  }
  input:focus, textarea:focus, select:focus, button, button:focus{
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* button {
    background: none;
    border: none;
  } */

  input, select {
    border-radius: 2px;
    border: 1px solid grey;
    padding: 4px 8px;
    background-color: transparent;
  }
  
  select {
    padding: 7px 10px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 8px;
    transition-duration: box-shadow 0.6s;
    &:hover {
      box-shadow: inset 0 0 5px black;
    }
  }
  ::-webkit-scrollbar-corner {
    width: 0;
    height: 0;
  }
`;

export default GlobalStyle;
