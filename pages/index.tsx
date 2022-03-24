import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { FiveItemLists } from '../utils/constants/data';

import About from '../components/About';
import Meta from '../components/Meta';

import AzukiGridDisplay from '../components/AzukiGridDisplay';
import Accordion from '../components/Accordion';
import AccordionVersion2 from '../components/AccordionVer2';
import CustomScrollBar from '../components/CustomScrollBar';

const Home: NextPage = () => {
  return (
    <div className={`${styles.unselectable}`}>
      <Meta />
      <main className={styles.main}>
        <About />
        <AzukiGridDisplay />
        <Accordion data={FiveItemLists} />
        <AccordionVersion2 data={FiveItemLists} />
        <CustomScrollBar />
      </main>
    </div>
  );
};

export default Home;
