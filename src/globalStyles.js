import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
  box-sizing: border-box;
  }

  *, ::after, ::before {
  box-sizing: inherit;
  }

  body {
  font-family: "Inter", sans-serif;
  word-break: break-word;
  max-width: 1244px;
  margin: 0 auto;
  }
`;

export default GlobalStyle;
