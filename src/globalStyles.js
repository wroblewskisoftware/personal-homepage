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
  letter-spacing: 0.05em;
  line-height: 1.4;
  max-width: 1244px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primaryText};
  transition: background-color 10s ease, color 10s ease;
  }
`;

export default GlobalStyle;
