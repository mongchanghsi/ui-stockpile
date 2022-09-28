import "../styles/globals.scss";
import "../styles/pace.scss";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import "../styles/nprogress.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoaderContextProvider from "../context/loaderContext";
import ColorThemeProvider from "../context/colorThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <LoaderContextProvider>
      <ColorThemeProvider>
        <Component {...pageProps} />
      </ColorThemeProvider>
    </LoaderContextProvider>
  );
}

export default MyApp;
