import type { NextPage } from 'next';
import About from '../components/About';
import AzukiGridDisplay from '../components/AzukiGridDisplay';
import Meta from '../components/Meta';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={`${styles.unselectable}`}>
      <Meta />
      <main className={styles.main}>
        <About />
        <AzukiGridDisplay />
      </main>
    </div>
  );
};

export default Home;
