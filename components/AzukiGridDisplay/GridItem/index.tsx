import { IFiveItemList } from '../../../utils/constants/data';
import styles from './index.module.scss';

const GridItem = ({ data }: { data: IFiveItemList }) => {
  return (
    <div className={styles.main}>
      <div>
        <p className={styles.content_text}>{data.content}</p>
      </div>
      <div>
        <h3 className={styles.content_number}>0{data.number}</h3>
        <h4 className={styles.content_title}>{data.title}</h4>
      </div>
    </div>
  );
};

export default GridItem;
