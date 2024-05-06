import { Container } from "./styled";
import Image from "./Image";
import Article from "./Article";
import ThemeToggle from "./ThemeToggle";

const Header = () => (
  <Container>
    <Image />
    <Article />
    <ThemeToggle />
  </Container>
);

export default Header;
