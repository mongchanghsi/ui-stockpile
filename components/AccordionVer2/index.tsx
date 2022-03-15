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
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2>Accordion List Version 2</h2>
        <p>
          Accordion Items where you can only strictly have one item opened at
          any point in time
        </p>
      </div>
      <div className={styles.main}>
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
      </div>
    </div>
  );
};

export default AccordionVersion2;
