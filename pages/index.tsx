import type { NextPage } from "next";
import Script from "next/script";
import styles from "../styles/Home.module.scss";

import About from "../components/About";
import Meta from "../components/Meta";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect } from "react";
import { LoaderContext } from "../context/loaderContext";
import { ColorThemeContext } from "../context/colorThemeContext";
import { SET_LOADER_CONTEXT } from "../context/actionType";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  const { appState: LoaderState, appDispatch: LoaderDispatch } =
    useContext(LoaderContext);
  const { appState: ColorThemeState, appDispatch: ColorThemeDispatch } =
    useContext(ColorThemeContext);

  useEffect(() => {
    if (!LoaderState.isInitialLoaded && !!window.Pace) {
      console.log("Pace not detected, starting Pace");
      window.Pace.start();
      window.Pace.once("done", () => {
        LoaderDispatch({ type: SET_LOADER_CONTEXT, value: null });
      });
    }
  }, []);

  return (
    <div
      className={`${styles.unselectable}`}
      style={{
        ["--background-color" as any]: `${ColorThemeState.colorCode.background_color}`,
        ["--headerOne-font-color" as any]: `${ColorThemeState.colorCode.headerOne}`,
        ["--headerTwo-font-color" as any]: `${ColorThemeState.colorCode.headerTwo}`,
        ["--paragraph-font-color" as any]: `${ColorThemeState.colorCode.paragraph}`,
      }}
    >
      <Meta>
        <link rel="preload" href="/pace.min.js" as="script" />
      </Meta>

      <Script
        async
        strategy="beforeInteractive"
        src="/pace.min.js"
        data-pace-options='{ "ajax": false, "eventLag": false, "startOnPageLoad":false, "restartOnPushState": false}'
      />

      <Navigation />

      <main className={styles.main}>
        <About />
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
