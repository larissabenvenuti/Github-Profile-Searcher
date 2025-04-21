'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #1F1F1F;
    position: relative;
    height: 100vh;
    width: 100vw;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: 
      radial-gradient(circle, #222 1px, transparent 1px);
    background-size: 15px 15px;
    background-position: center center;
    opacity: 0.1;
    z-index: -2;
  }

  body::after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: 
      radial-gradient(
        circle 400px at 90% 10%,
        rgba(0, 106, 255, 0.6) 0%,
        rgba(0, 106, 255, 0.2) 30%,
        transparent 70%
      ),
      radial-gradient(
        circle 400px at left center,
        rgba(0, 85, 255, 0.4) 0%,
        rgba(0, 85, 255, 0.1) 40%,
        transparent 70%
      );
    pointer-events: none;
    z-index: -1;
    opacity: 0.85;
  }

  body::before,
  body::after,
  body::after,
  .dots-overlay::before {
    pointer-events: none;
  }

  .dots-overlay::before {
    content: "";
    position: fixed;
    top: 20px;
    left: 100px;
    width: 160px;
    height: 160px;
    background-image: radial-gradient(#707070 1px, transparent 1px);
    background-size: 12px 12px;
    opacity: 0.4;
    z-index: -1;
    mask-image: linear-gradient(to bottom, black 0 80%, transparent 100%), linear-gradient(to right, black 0 80%, transparent 100%);
    mask-composite: intersect;
    -webkit-mask-composite: destination-in;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 80px;
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .content-box {
    background-color: #000;
    width: 90%;
    max-width: 800px;
    min-height: 280px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.7);
  }
`;

export default GlobalStyles;
