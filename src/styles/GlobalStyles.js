'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
