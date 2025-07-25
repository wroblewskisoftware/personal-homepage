import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "./features/theme/themeSlice";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const isDark = useSelector(selectTheme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
