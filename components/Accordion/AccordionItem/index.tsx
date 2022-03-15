import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './index.module.scss';

const AccordionItem = ({ data }: { data: any }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={styles.item}>
      <div onClick={() => setExpanded(!expanded)} className={styles.question}>
        <h3 className={styles.question_text}>{data.title}</h3>
        <div
          className={`${styles.question_icon} ${
            expanded && styles.question_icon_flip
          }`}
        >
          <BsChevronDown size={20} color='black' />
        </div>
      </div>

      <div className={`${styles.answer} ${expanded && styles.answer_open}`}>
        <p className={`${styles.answer_text}`}>{data.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
