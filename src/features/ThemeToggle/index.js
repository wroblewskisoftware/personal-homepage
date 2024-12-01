import { ReactComponent as ThemeButtonLightImage } from "../../assets/themeButtonLight.svg";
import { Container, ToggleText, ToggleButton } from "./styled";

const ThemeToggle = () => (
  <Container>
    <ToggleText>DARK MODE OFF</ToggleText>
    <ToggleButton>
      <ThemeButtonLightImage />
    </ToggleButton>
  </Container>
);

export default ThemeToggle;
