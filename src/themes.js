const baseTheme = {
  color: {
    white: "#ffffff",
    whiteLilac: "#fbfbfe",
    slateGray: "#6e7e91",
    iron: "#d1d5da4d",
    mistyGray: "#D1D5DA1A",
    gray: "#363636B8",
    dark: "#252525",
    parsley: "#14462033",
    haiti: "#090A3305",
    violet: "#090A3308",
    lightBlue: "#8CC2FF",
    blueGray: "#6D93BE",
    dodgerBlue: "#2188FF",
    dodgerBlue40: "#2188FF66",
    scienceBlue: "#0366D6",
    scienceBlue20: "#0366D633",
    scienceBlue50: "#0366D680",
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
      tileBorder: baseTheme.color.iron,
      tileBorderHover: baseTheme.color.scienceBlue20,
      projectTileHeader: baseTheme.color.scienceBlue,
      linkUnderline: baseTheme.color.scienceBlue20,
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
      tileBorder: baseTheme.color.mistyGray,
      tileBorderHover: baseTheme.color.scienceBlue50,
      projectTileHeader: baseTheme.color.white,
      linkUnderline: baseTheme.color.dodgerBlue40,
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
