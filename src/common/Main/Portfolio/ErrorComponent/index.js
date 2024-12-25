import {
  StyledContainer,
  StyledIcon,
  StyledHeader,
  StyledParagraph,
} from "./styled";
import { StyledLink, StyledLinkParagraph } from "../../../styled";

const ErrorComponent = () => (
  <StyledContainer>
    <StyledIcon />
    <StyledHeader>Ooops! Something went wrong...</StyledHeader>
    <StyledParagraph>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </StyledParagraph>
    <StyledLink
      href="https://github.com/wroblewskisoftware"
      rel="noopener noreferrer"
      target="_blanc"
    >
      <StyledLinkParagraph>Go to Github</StyledLinkParagraph>
    </StyledLink>
  </StyledContainer>
);

export default ErrorComponent;
