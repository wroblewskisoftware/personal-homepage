import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: getThemeFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = (state) => state.theme;
export const selectTheme = (state) => selectThemeState(state).isDarkMode;

export default themeSlice.reducer;
