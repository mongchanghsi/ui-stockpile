/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss';
import {
  SixImageLists,
  SixImageLists2,
  SixImageLists3,
} from '../../utils/constants/data';
import { useCallback, useEffect, useRef, useState } from 'react';

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
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [thumbWidth, setThumbWidth] = useState(40);

  const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(
    null
  );
  const [initialScrollLeft, setInitialScrollLeft] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleResize = (ref: HTMLDivElement, trackSize: number) => {
    const { clientWidth, scrollWidth } = ref;
    setThumbWidth(Math.max((clientWidth / scrollWidth) * trackSize, 40));
  };

  const handleThumbPosition = useCallback(() => {
    if (
      !contentRef.current ||
      !scrollTrackRef.current ||
      !scrollThumbRef.current
    ) {
      return;
    }
    const { scrollLeft: contentLeft, scrollWidth: contentWidth } =
      contentRef.current;
    const { clientWidth: trackWidth } = scrollTrackRef.current;
    let newLeft = (+contentLeft / +contentWidth) * trackWidth;
    newLeft = Math.min(newLeft, trackWidth - thumbWidth);
    const thumb = scrollThumbRef.current;
    thumb.style.left = `${newLeft}px`;
  }, [data]);

  const handleThumbMouseRight = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientX);
    if (contentRef.current) setInitialScrollLeft(contentRef.current.scrollLeft);
    setIsDragging(true);
  }, []);

  const handleThumbMouseLeft = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging]
  );

  const handleThumbMouseMove = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        if (!contentRef.current || !scrollStartPosition) return;

        const {
          scrollLeft: contentScrollWidth,
          offsetWidth: contentOffsetWidth,
        } = contentRef.current;

        // Subtract the current mouse y position from where you started to get the pixel difference in mouse position. Multiply by ratio of visible content height to thumb height to scale up the difference for content scrolling.
        const deltaX =
          (e.clientX - scrollStartPosition) * (contentOffsetWidth / thumbWidth);

        const newScrollLeft = Math.min(
          initialScrollLeft + deltaX,
          contentScrollWidth - contentOffsetWidth
        );

        contentRef.current.scrollLeft = newScrollLeft;
      }
    },
    [isDragging, scrollStartPosition, thumbWidth]
  );

  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const { clientWidth: trackSize } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener('scroll', handleThumbPosition);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener('scroll', handleThumbPosition);
      };
    }
  }, [data]);

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMouseMove);
    // document.addEventListener('mouseleft', handleThumbMouseLeft);
    document.addEventListener('mouseleave', handleThumbMouseLeft);
    return () => {
      document.removeEventListener('mousemove', handleThumbMouseMove);
      // document.removeEventListener('mouseleft', handleThumbMouseLeft);
      document.removeEventListener('mouseleave', handleThumbMouseLeft);
    };
  }, [handleThumbMouseMove, handleThumbMouseLeft]);

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
        <p></p>
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
          <div className={styles.gallery} ref={contentRef}>
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
            <div className={styles.scrollbar_track} ref={scrollTrackRef}></div>
            <div
              className={styles.scrollbar_thumb}
              style={{
                width: `${thumbWidth}px`,
              }}
              ref={scrollThumbRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollBar;
