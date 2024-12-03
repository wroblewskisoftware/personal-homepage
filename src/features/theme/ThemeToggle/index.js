import { useDispatch, useSelector } from "react-redux";
import { Container, ToggleText, ToggleButton } from "./styled";
import { ReactComponent as ThemeButtonLightImage } from "../../../assets/themeButtonLight.svg";
import { ReactComponent as ThemeButtonDarkImage } from "../../../assets/themeButtonDark.svg";
import { toggleTheme, selectTheme } from "../themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectTheme);

  return (
    <Container>
      <ToggleText>DARK MODE {isDarkMode === false ? "OFF" : "ON"}</ToggleText>
      <ToggleButton onClick={() => dispatch(toggleTheme())}>
        {isDarkMode === false
          ? (<ThemeButtonLightImage />)
          : (<ThemeButtonDarkImage />)
        }
      </ToggleButton>
    </Container>
  );
};

export default ThemeToggle;
