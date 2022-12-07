import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../constants/GlobalStyle";
import { LightAppearanceTheme } from "../constants/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightAppearanceTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
