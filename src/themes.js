const baseTheme = {
  color: {
    white: "#ffffff",
    whiteLilac: "#fbfbfe",
    slateGray: "#6e7e91",
    iron: "#d1d5da4d",
    gray: "#363636B8",
    dark: "#252525",
    parsley: "#14462033",
    haiti: "#090A3305",
    violet: "#090A3308",
    lightBlue: "#8CC2FF",
    blueGray: "#6D93BE",
    dodgerBlue: "#2188FF",
    scienceBlue: "#0366D6",
  },
  breakpoint: {
    mobileMax: 767,
  },
};

const themeVariants = {
  light: {
    color: {
      background: baseTheme.color.whiteLilac,
      sectionBackground: baseTheme.color.white,
      primaryText: baseTheme.color.dark,
      secondaryText: baseTheme.color.slateGray,
      buttonBackground: baseTheme.color.scienceBlue,
      buttonShadow: baseTheme.color.lightBlue,
      loadingCircle: baseTheme.color.iron,
      loadingCirclePart: baseTheme.color.scienceBlue,
    },
  },
  dark: {
    color: {
      background: baseTheme.color.dark,
      sectionBackground: baseTheme.color.gray,
      primaryText: baseTheme.color.white,
      secondaryText: baseTheme.color.white,
      buttonBackground: baseTheme.color.dodgerBlue,
      buttonShadow: baseTheme.color.blueGray,
      loadingCircle: baseTheme.color.gray,
      loadingCirclePart: baseTheme.color.dodgerBlue,
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
