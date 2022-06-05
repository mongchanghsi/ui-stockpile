import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import AccordionItem from './AccordionItem';
import { IFiveItemList } from '../../utils/constants/data';

const AccordionVersion2 = ({ data }: { data: IFiveItemList[] }) => {
  const [currentData, setCurrentData] = useState<any[]>([]);

  useEffect(() => {
    const prepData = () => {
      return data.map((item: IFiveItemList) => {
        return {
          ...item,
          open: false,
        };
      });
    };
    setCurrentData(prepData());
  }, []);

  const handleClick = (index: number) => {
    const _temp = [...currentData];

    // Check if the current index is already open;
    if (_temp[index].open) {
      _temp[index].open = false;
    } else {
      // Convert all to false
      _temp.forEach((x) => (x.open = false));

      // Find the index to true
      _temp[index].open = true;
    }

    setCurrentData(_temp);
  };

  return (
    <ul className={styles.main} aria-label='items'>
      {currentData.map((item: IFiveItemList, index: number) => {
        return (
          <AccordionItem
            data={item}
            key={index}
            handleClick={handleClick}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default AccordionVersion2;
