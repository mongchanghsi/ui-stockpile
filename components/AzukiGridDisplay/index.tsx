import styles from './index.module.scss';
import { FiveItemLists } from '../../utils/constants/data';
import GridItem from './GridItem';

const AzukiGridDisplay = () => {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {FiveItemLists.map((item) => (
          <div
            key={`GridItem_${item.number}`}
            className={`${styles.block} ${
              (item.number === 1 || item.number === 4) &&
              styles.grid_col_span_2
            }`}
          >
            <GridItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AzukiGridDisplay;
