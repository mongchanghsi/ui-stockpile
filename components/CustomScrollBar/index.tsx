/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss';
import {
  SixImageLists,
  SixImageLists2,
  SixImageLists3,
} from '../../utils/constants/data';
import { useEffect, useRef, useState } from 'react';
import { Range } from 'react-range';

export const galleryFilter = [
  {
    type: 1,
    name: 'Gallery 1',
  },
  {
    type: 2,
    name: 'Gallery 2',
  },
  {
    type: 3,
    name: 'Gallery 3',
  },
];

const CustomScrollBar = () => {
  const [data, setData] = useState<any[]>(SixImageLists);
  const [activeFilter, setActiveFilter] = useState<number>(1);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [offsetLeft, setOffsetLeft] = useState<number[]>([0]);
  const [childElements, setChildElements] = useState<number>(1);
  const [max, setMax] = useState<number>(1);

  useEffect(() => {
    if (!contentRef || !contentRef.current || !contentRef.current.childNodes)
      return;

    setChildElements(contentRef.current.childNodes.length);
    setMax(contentRef.current.scrollWidth - contentRef.current.offsetWidth);
    contentRef.current.scrollTo({ left: offsetLeft[0], behavior: 'smooth' });
  }, [childElements, max, offsetLeft]);

  const handleChange = (values: any) => {
    setOffsetLeft(values);
  };

  const handleScroll = (e: any) => {
    setOffsetLeft([e.target.scrollLeft]);
  };

  useEffect(() => {
    switch (activeFilter) {
      case 1:
        setData(SixImageLists);
        break;
      case 2:
        setData(SixImageLists2);
        break;
      case 3:
        setData(SixImageLists3);
        break;
      default:
        setData(SixImageLists);
        break;
    }
  }, [activeFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2>Horizontal Gallery with Custom Scroll Bar</h2>
        <p>
          Horizontal Gallery with a customized horizonal scroll bar separated
          from the component as well as options to switch between data.
        </p>
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <ul className={styles.menu}>
              {galleryFilter.map((filter) => {
                return (
                  <li
                    key={`GalleryFilter_${filter.name}`}
                    onClick={() => setActiveFilter(filter.type)}
                  >
                    <p>{filter.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={styles.gallery}
            ref={contentRef}
            onScroll={(e) => {
              handleScroll(e);
            }}
          >
            <ul>
              {data.map((item, index: number) => {
                return (
                  <li key={`Gallery_${item.name}_${item.number}`}>
                    <img src={item.image.src} alt={item.name} />
                    <p>{item.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div id='GalleryCustomScrollbar' className={styles.scrollbar}>
            <Range
              step={1}
              min={0}
              max={max}
              values={offsetLeft}
              onChange={(values) => handleChange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                  }}
                  className={styles.scrollbar_track}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                  }}
                  className={styles.scrollbar_thumb}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollBar;
