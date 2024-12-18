import { StyledHeader, Container } from "./styled";
import Image from "./Image";
import Article from "./Article";
import ThemeToggle from "../../features/theme/ThemeToggle";

const Header = () => (
  <StyledHeader>
    <ThemeToggle />
    <Container>
      <Image />
      <Article />
    </Container>
  </StyledHeader>
);

export default Header;
