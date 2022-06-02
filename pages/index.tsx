import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

import About from '../components/About';
import Meta from '../components/Meta';
<<<<<<< HEAD

import AzukiGridDisplay from '../components/AzukiGridDisplay';
import Accordion from '../components/Accordion';
import AccordionVersion2 from '../components/AccordionVer2';
import CustomScrollBar from '../components/CustomScrollBar';
=======
import SearchBar from '../components/SearchBar';
>>>>>>> 0dd281ccc654123fdea91c1e63082449c157e6cb

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
