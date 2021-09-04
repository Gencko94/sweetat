import type { AppProps } from "next/app";
import ThemeProvider from "../contexts/ThemeContext";
import GlobalStyle from "../styles/globalStyles";
import "../styles/animations.css";
import { useEffect } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  // useEffect(() => {
  //   if (i18n.language === "ar") {
  //     document.documentElement.setAttribute("dir", "rtl");
  //   } else if (i18n.language === "en") {
  //     document.documentElement.setAttribute("dir", "ltr");
  //   }
  // }, [i18n.language]);
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
