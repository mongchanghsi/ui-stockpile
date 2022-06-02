import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

import About from '../components/About';
import Meta from '../components/Meta';
import SearchBar from '../components/SearchBar';

const Home: NextPage = () => {
  return (
    <div className={`${styles.unselectable}`}>
      <Meta />
      <main className={styles.main}>
        <About />
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
