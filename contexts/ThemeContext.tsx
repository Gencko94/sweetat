import React, { createContext, useCallback, useMemo, useState } from "react";
// import { useTranslation } from "react-i18next";
import styled, { ThemeProvider as StyledThemes } from "styled-components";

import {
  DARK_COLORS,
  LIGHT_COLORS,
  PREFERS_DARK_CSS_PROP,
  PREFERS_DARK_KEY,
  THEME,
} from "../constants";

type ContextProps = {
  colorMode: "light" | "dark";
  setColorMode: (mode: "light" | "dark") => void;
};

export const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeProvider: React.FC = ({ children }) => {
  let initialColorValue: "dark" | "light" = "dark";
  if (typeof window !== "undefined") {
    let root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    initialColorValue = root.style.getPropertyValue("--initial-color-mode") as
      | "light"
      | "dark";
  }
  const [colorMode, rawSetColorMode] = useState(initialColorValue);

  const value = useMemo(() => {
    const setColorMode = (value: "dark" | "light") => {
      console.log(value);
      let root = window.document.documentElement;

      const prefersDark = value === "dark" ? "true" : "false";

      const newColors = prefersDark === "true" ? DARK_COLORS : LIGHT_COLORS;
      Object.entries(newColors).forEach(([name, colorByTheme]) => {
        const cssVarName = "--color-" + name;
        root.style.setProperty(cssVarName, colorByTheme);
      });

      rawSetColorMode(value);

      localStorage.setItem(PREFERS_DARK_KEY, prefersDark);
    };
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemes theme={THEME}>{children}</StyledThemes>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
