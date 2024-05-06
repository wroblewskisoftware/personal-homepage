import { ReactComponent as ThemeButtonLightImage } from "../../images/ThemeButtonLight.svg";
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
