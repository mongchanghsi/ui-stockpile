import { FC } from "react";
import styles from './index.module.scss';

interface DecriptionProps {
  heading: string,
  description: string,
}
const Description: FC<DecriptionProps> = ({heading, description}) => {
  return (
    <div className={styles.desc}>
      <h2>{heading}</h2>
      <p>
        {description}
      </p>
    </div>
  )
}
export default Description;