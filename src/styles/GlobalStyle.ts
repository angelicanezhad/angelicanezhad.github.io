import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  p, a, span, div {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  section {
    scroll-margin-top: 80px;
  }
`;

export default GlobalStyle; 