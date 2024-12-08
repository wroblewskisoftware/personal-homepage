const baseTheme = {
  color: {
    white: "#ffffff",
    iron: "#d1d5da4d",
    parsley: "#14462033",
  },
  breakpoint: {
    mobileMax: 767,
  },
};

const themeVariants = {
  light: {
    color: {
      background: "#fbfbfe",
      primaryText: "#252525",
      secondaryText: "#6e7e91",
      buttonBackground: "#0366D6",
      buttonShadow: "#8CC2FF",
    },
  },
  dark: {
    color: {
      background: "#252525",
      primaryText: "#ffffff",
      secondaryText: "#ffffff",
      buttonBackground: "#2188FF",
      buttonShadow: "#6D93BE",
    },
  },
};

export const lightTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    ...themeVariants.light.color,
  },
};

export const darkTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    ...themeVariants.dark.color,
  },
};