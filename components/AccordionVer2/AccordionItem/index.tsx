import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './index.module.scss';

const AccordionItem = ({
  data,
  handleClick,
  index,
}: {
  data: any;
  handleClick: (x: number) => void;
  index: number;
}) => {
  return (
    <div className={styles.item}>
      <div onClick={() => handleClick(index)} className={styles.question}>
        <h3 className={styles.question_text}>{data.title}</h3>
        <div
          className={`${styles.question_icon} ${
            data.open && styles.question_icon_flip
          }`}
        >
          <BsChevronDown size={20} color='black' />
        </div>
      </div>

      <div className={`${styles.answer} ${data.open && styles.answer_open}`}>
        <p className={`${styles.answer_text}`}>{data.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
