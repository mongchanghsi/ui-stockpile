import styles from './index.module.scss';

const GridItem = ({ data }: { data: any }) => {
  return (
    <div className={styles.main}>
      <p>{data.item}</p>
    </div>
  );
};

export default GridItem;
