import styles from './index.module.scss';
import { IFiveItemList } from '../../utils/constants/data';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }: { data: IFiveItemList[] }) => {
  return (
    <ul className={styles.main} aria-label='items'>
      {data.map((item) => (
        <div id={`Accordion_${item.number}`} key={`Accordion_${item.number}`}>
          <AccordionItem data={item} />
        </div>
      ))}
    </ul>
  );
};

export default Accordion;
