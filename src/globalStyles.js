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
  max-width: 1244px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primaryText};
  }
`;

export default GlobalStyle;
