import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './index.module.scss';
import { IFiveItemList } from '../../../utils/constants/data';

const AccordionItem = ({ data }: { data: IFiveItemList }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <li className={styles.item}>
      <div
        onClick={() => setExpanded(!expanded)}
        className={styles.question}
        data-testid={`Accordion_${data.number}`}
        id={`Accordion_${data.number}`}
      >
        <h3 className={styles.question_text}>{data.title}</h3>
        <div
          className={`${styles.question_icon} ${
            expanded ? styles.question_icon_flip : ''
          }`}
        >
          <BsChevronDown size={20} color='black' />
        </div>
      </div>

      <div className={`${styles.answer} ${expanded ? styles.answer_open : ''}`}>
        <p className={`${styles.answer_text}`}>{data.content}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
