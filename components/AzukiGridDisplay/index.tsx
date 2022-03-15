import styles from './index.module.scss';
import { FiveItemLists } from '../../utils/constants/data';
import GridItem from './GridItem';

const AzukiGridDisplay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2>Azuki Grid Display - Not Clickable</h2>
        <p>
          Azuki Grid Display is inspired from https://www.azuki.com/mindmap and
          strictly note that it is limited to only 5 items. If you want to fit
          more items, you should manually adjust the grid to your requirements.
        </p>
      </div>

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
    </div>
  );
};

export default AzukiGridDisplay;
