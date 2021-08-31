export const LIGHT_COLORS: { [key: string]: string } = {
  background: "hsl(255,25%,95%)",
  shadow: "0px 4px 7px 2px rgb(213,213,213)",
  errorShadow: "0px 0px 10px 0px #b72b2b",
  green: "#0B9B23",
  dangerRed: "#b72b2b",
  border: "1px solid rgba(0,0,0,0.1)",
  borderHovered: "rgba(0,0,0,0.3)",
  text: "#252525",
  textContrast: "#fff",
  textAlt: "#737373",
  textAltContrast: "#fbfbfb",
};
LIGHT_COLORS.subtleFloating = "hsl(0, 0%, 100%)";
LIGHT_COLORS.subtleBackground = "hsl(0, 4%, 99%)";

LIGHT_COLORS.sidebarBackground = "hsl(210deg, 22%, 15%)";
LIGHT_COLORS.sidebarSubtleBackground = "hsl(210,30%,8%)";
export const DARK_COLORS: { [key: string]: string } = {
  background: "hsl(210,30%,8%)",

  shadow: "none",
  errorShadow: "0px 0px 10px 0px #b72b2b",
  green: "#1AD439",
  dangerRed: "hsl(0, 100%, 69.6%)",
  border: "1px solid hsl(248, 54%, 49%)",
  borderHovered: "rgba(255,255,255,0.7)",
  text: "#fff",
  textContrast: "#252525",
  textAlt: "#ececec",
  textAltContrast: "#fbfbfb",
};

DARK_COLORS.subtleBackground = "hsl(210, 22%, 25%)";

DARK_COLORS.subtleFloating = "hsl(210, 22%, 15%)";

DARK_COLORS.sidebarBackground = "hsl(210, 22%, 15%)";
DARK_COLORS.sidebarSubtleBackground = DARK_COLORS.subtleBackground;

// This key is used in localStorage to remember theme preferences

export const PREFERS_DARK_KEY = "prefers-dark";

export const PREFERS_DARK_CSS_PROP = `--${PREFERS_DARK_KEY}`;
export const up = (breakpoint: string) => `@media (min-width: ${breakpoint})`;
export const down = (breakpoint: string) => `@media (max-width: ${breakpoint})`;

export interface Sizes {
  xs: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Devices {
  xs: string;
  md: string;
  lg: string;
  xl: string;
}
const size: Sizes = {
  xs: "320px",
  md: "768px",
  lg: "1100px",
  xl: "1366px",
};

export const BREAKPOINTS: Devices = {
  xs: size.xs,
  md: size.md,
  lg: size.lg,
  xl: size.xl,
};

export const THEME = {
  breakpoints: BREAKPOINTS,
  font: {
    light: "300",
    regular: "400",
    semibold: "500",
    bold: "700",
    xbold: "900",
  },
};
