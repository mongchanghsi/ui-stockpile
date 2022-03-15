import styles from './index.module.scss';
import { IFiveItemList } from '../../utils/constants/data';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }: { data: IFiveItemList[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2>Accordion List</h2>
        <p>
          Accordion Items where you can have multiple items to be opened at one
          time
        </p>
      </div>
      <div className={styles.main}>
        {data.map((item) => (
          <div key={`Accordion_${item.number}`}>
            <AccordionItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
