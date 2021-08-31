import type { AppProps } from "next/app";
import ThemeProvider from "../contexts/ThemeContext";
import GlobalStyle from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
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
