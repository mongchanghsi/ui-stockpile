/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss';
import {
  getDisplay,
  getOpacity,
  getTransform,
  getZIndex,
} from './utilFunctions';
import { useState } from 'react';
import { POSITION, ALIGNMENT, SPREAD } from './constants';
import { ISixImageList } from '../../utils/constants/data';

let iteration = 0;

const Carousel = ({ data }: { data: ISixImageList[] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [listLength] = useState<number>(data.length);

  const getCardClass = (index: number) => {
    if (activeIndex === null) return POSITION.HIDDEN;
    if (activeIndex === index) return POSITION.CURRENT;

    if (
      index === activeIndex + 1 ||
      (index === 0 && activeIndex === data.length - 1)
    ) {
      return POSITION.NEXT;
    }

    if (
      index === activeIndex + 2 ||
      (index === 0 && activeIndex === data.length - 2) ||
      (index === 1 && activeIndex === data.length - 1)
    ) {
      return POSITION.NEXT_NEXT;
    }

    if (
      index === activeIndex - 1 ||
      (index === data.length - 1 && activeIndex === 0)
    ) {
      return POSITION.PREV;
    }

    return POSITION.HIDDEN;
  };

  const goNext = () => {
    if (activeIndex === data.length - 1) {
      iteration++;
      setActiveIndex(0);
    } else {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  const goPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2>Carousel Version 1</h2>
        <p>
          This carousel version will initially show 3 items at the initialIndex
          of 0, thereafter when it completes a full loop, it will show 4 items
          at the initialIndex. This carousel will be able to see the next 2
          items and 1 previous item.
        </p>
      </div>

      <div className={styles.main}>
        <div></div>
        {iteration === 0 && activeIndex === 0 && <div></div>}

        {data.map((item, index: number) => {
          const position = getCardClass(index);

          return (
            <div
              key={item.title}
              style={{
                position: 'absolute',
                transition: 'all 0.6s',
                opacity: getOpacity(position, iteration, index, listLength),
                display: getDisplay(position, iteration, index, listLength),
                zIndex: getZIndex(position),
                transform: getTransform(
                  position,
                  ALIGNMENT.HORIZONTAL,
                  SPREAD.CUSTOM
                ),
              }}
            >
              <img
                src={item.image.src}
                alt={item.title}
                style={{
                  border: index === activeIndex ? '10px solid red' : '',
                }}
              />
            </div>
          );
        })}
      </div>

      <div>
        <button type='button' onClick={goPrev}>
          Prev
        </button>
        <button type='button' onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
