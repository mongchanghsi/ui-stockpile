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
      <ul className={styles.main} aria-label='items'>
        {data.map((item) => (
          <div id={`Accordion_${item.number}`} key={`Accordion_${item.number}`}>
            <AccordionItem data={item} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
