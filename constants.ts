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
  primary: "hsl(31, 100%, 60%)",
  secondary: "hsl(248, 54%, 49%)",
};
LIGHT_COLORS.subtleFloating = "hsl(0, 0%, 100%)";
LIGHT_COLORS.subtleBackground = "hsl(0, 4%, 99%)";

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
  textAlt: "#bdbdbd",
  textAltContrast: "#fbfbfb",
  primary: "rgb(250, 66, 140)",
  secondary: "hsla(222, 100%, 58%, 1)",
};

DARK_COLORS.subtleBackground = "hsl(210, 22%, 25%)";

DARK_COLORS.subtleFloating = "hsl(210, 22%, 15%)";

// This key is used in localStorage to remember theme preferences

export const PREFERS_DARK_KEY = "prefers-dark";

export const PREFERS_DARK_CSS_PROP = `--${PREFERS_DARK_KEY}`;
export const up = (breakpoint: string) => `@media (min-width: ${breakpoint})`;
export const down = (breakpoint: string) => `@media (max-width: ${breakpoint})`;

export type COLORS =
  | "primary"
  | "secondary"
  | "text"
  | "textContrast"
  | "textAlt"
  | "textAltContrast";
export type WEIGHTS = "light" | "regular" | "semibold" | "bold" | "xbold";

export interface Sizes {
  xs: string;
  md: string;
  lg: string;
  xl: string;
}

// const size: Sizes = {
//   xs: "320px",
//   md: "768px",
//   lg: "1100px",
//   xl: "1366px",
// };
export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 563,
  md: 768,
  lg: 1024,
  xl: 1440,
};
// export const BREAKPOINTS: Devices = {
//   xs: size.xs,
//   md: size.md,
//   lg: size.lg,
//   xl: size.xl,
// };
export interface Devices {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xsAndSmaller: string;
  smAndSmaller: string;
  mdAndSmaller: string;
  lgAndSmaller: string;
  xlAndSmaller: string;
  xsAndLarger: string;
  smAndLarger: string;
  mdAndLarger: string;
  lgAndLarger: string;
  xlAndLarger: string;
  mobile: string;
  desktop: string;
}
export const BREAKPOINTS: Devices = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(min-width: ${BREAKPOINT_SIZES.xs}px and max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(min-width: ${BREAKPOINT_SIZES.sm}px and max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.md}px and max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(min-width: ${BREAKPOINT_SIZES.lg}px and max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  smAndSmaller: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  mdAndSmaller: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lgAndSmaller: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xlAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndLarger: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
  smAndLarger: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  mdAndLarger: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
  lgAndLarger: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
  xlAndLarger: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
  mobile: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
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
