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
    primary: "hsl(31, 100%, 60%)",
    secondary: "hsl(248, 54%, 49%)",
    text: "#252525",
    textContrast: "#fff",
    textAlt: "#737373",
    textAltContrast: "#fbfbfb",
  };
  LIGHT_COLORS.subtleFloating = "hsl(0, 0%, 100%)";
  LIGHT_COLORS.subtleBackground = "hsl(0, 4%, 99%)";

 

  const DARK_COLORS = {
    background: "hsl(210,30%,8%)",
    primary: "rgb(250, 66, 140)",
    secondary: "hsla(222, 100%, 58%, 1)",
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
  };

  DARK_COLORS.subtleBackground = "hsl(210, 22%, 25%)";

  DARK_COLORS.subtleFloating = "hsl(210, 22%, 15%)";

 
 

  
  (function() {
    const root = document.documentElement;
    // i18n prefs
    const persistedLanguage = window.localStorage.getItem("i18nextLng");
    console.log(persistedLanguage)
    try {
      if (typeof persistedLanguage === "string") {
        if (persistedLanguage === "ar") {
          root.setAttribute("dir", "rtl");
          root.setAttribute("lang", "ar");
        } else if (persistedLanguage === "en") {
          root.setAttribute("dir", "ltr");
          root.setAttribute("lang", "en");
        }
      } else {
        window.localStorage.setItem("i18nextLng","ar")
        root.setAttribute("dir", "rtl");
        root.setAttribute("lang", "ar");
        
      }
    } catch (error) {
      console.log(error);
    }


    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('prefers-dark');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {

        
        return persistedColorPreference ==="true" ? "dark" : "light";
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
   
    try {
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = "--color-" + name;
        root.style.setProperty(cssVarName, colorByTheme);
      });
    } catch (error) {
      console.log(error);
    }
    
   
    root.style.setProperty('--border-radius', '10px');
    root.style.setProperty('--initial-color-mode', colorMode);
   
    
    
  })()`;
  // eslint-disable-next-line react/no-danger

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
