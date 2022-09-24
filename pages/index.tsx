import type { NextPage } from "next";
import Script from "next/script";
import styles from "../styles/Home.module.scss";

import About from "../components/About";
import Meta from "../components/Meta";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect } from "react";
import { LoaderContext } from "../context/loaderContext";
import { SET_LOADER_CONTEXT } from "../context/actionType";

const Home: NextPage = () => {
  const { appState: LoaderState, appDispatch: LoaderDispatch } =
    useContext(LoaderContext);

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
    <div className={`${styles.unselectable}`}>
      <Meta>
        <link rel="preload" href="/pace.min.js" as="script" />
      </Meta>

      <Script
        async
        strategy="beforeInteractive"
        src="/pace.min.js"
        data-pace-options='{ "ajax": false, "eventLag": false, "startOnPageLoad":false, "restartOnPushState": false}'
      />

      <main className={styles.main}>
        <About />
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
