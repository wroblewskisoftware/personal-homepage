import { useSelector } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { selectTheme } from "./features/theme/themeSlice";

export const ThemeProvider = ({ children }) => {
  const isDark = useSelector(selectTheme);

  return (
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
  );
};
