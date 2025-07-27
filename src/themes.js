const baseTheme = {
  color: {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    slateGray: "#6E7E91",
    iron: "#D1D5DA4D",
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
      hyperlink: baseTheme.color.scienceBlue,
      hyperlinkOutline: baseTheme.color.lightBlue,
      hyperlinkUnderline: baseTheme.color.scienceBlue20,
      hyperlinkUnderlineHover: baseTheme.color.scienceBlue,
      iconBackground: baseTheme.color.scienceBlue,
      loadingCircle: baseTheme.color.iron,
      loadingCirclePart: baseTheme.color.scienceBlue,
      projectTileHeader: baseTheme.color.scienceBlue,
      tileBorder: baseTheme.color.iron,
      tileBorderHover: baseTheme.color.scienceBlue20,
    },
  },
  dark: {
    color: {
      background: baseTheme.color.dark,
      sectionBackground: baseTheme.color.gray,
      primaryText: baseTheme.color.white,
      secondaryText: baseTheme.color.white,
      hyperlink: baseTheme.color.dodgerBlue,
      hyperlinkOutline: baseTheme.color.blueGray,
      hyperlinkUnderline: baseTheme.color.dodgerBlue40,
      hyperlinkUnderlineHover: baseTheme.color.dodgerBlue,
      iconBackground: baseTheme.color.dodgerBlue,
      loadingCircle: baseTheme.color.gray,
      loadingCirclePart: baseTheme.color.dodgerBlue,
      projectTileHeader: baseTheme.color.white,
      tileBorder: baseTheme.color.mistyGray,
      tileBorderHover: baseTheme.color.scienceBlue50,
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
