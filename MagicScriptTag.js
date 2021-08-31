export const MagicScriptTag = () => {
  let codeToRunOnClient = `
  const LIGHT_COLORS = {
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

  const DARK_COLORS = {
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
 

  
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      // If they haven't been explicit, let's check the media
      // query
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light';
    }
    const colorMode = getInitialColorMode();
    const COLORS =  colorMode ==='light' ? LIGHT_COLORS : DARK_COLORS;
    const root = document.documentElement;
    try {

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      
        const cssVarName = '--color-' + name;
        root.style.setProperty(cssVarName, colorByTheme);
      });
    } catch(error) {
        console.log(error);
    }
   
    
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
