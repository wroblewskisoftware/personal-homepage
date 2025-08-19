import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  ToggleText,
  ThemeToggleButton,
  ThemeToggleThumb,
  ThemeToggleIcon,
} from "./styled";
import { toggleTheme, selectTheme } from "../themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectTheme);

  return (
    <Container>
      <ToggleText>DARK MODE {isDarkMode === false ? "OFF" : "ON"}</ToggleText>
      <ThemeToggleButton onClick={() => dispatch(toggleTheme())}>
        <ThemeToggleThumb $isDarkMode={isDarkMode}>
          <ThemeToggleIcon />
        </ThemeToggleThumb>
      </ThemeToggleButton>
    </Container>
  );
};

export default ThemeToggle;
