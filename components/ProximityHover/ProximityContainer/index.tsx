import styles from "./index.module.scss";
import RickImage from "../../../public/assets/rick.svg";
import MortyImage from "../../../public/assets/morty.svg";
import Image from "next/image";
import EyeImage from "../../../public/assets/eye.svg";

const ProximityContainer = ({ rotationAngle }: { rotationAngle: number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.morty}>
        <Image src={MortyImage} alt="Morty" layout="fill" />
        <div className={styles.morty_eyes}>
          <div
            className={styles.morty_eyes_left}
            style={{ transform: `rotate(${90 + rotationAngle}deg)` }}
          >
            <div className={styles.morty_eyes_left_image}>
              <Image src={EyeImage} alt="Morty Left Eye" layout="fill" />
            </div>
          </div>
          <div
            className={styles.morty_eyes_right}
            style={{ transform: `rotate(${90 + rotationAngle}deg)` }}
          >
            <div className={styles.morty_eyes_right_image}>
              <Image src={EyeImage} alt="Morty Right Eye" layout="fill" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rick}>
        <Image src={RickImage} alt="Rick" layout="fill" />
        <div className={styles.rick_eyes}>
          <div className={styles.rick_eyes_left}>
            <div
              className={styles.rick_eyes_left_image}
              style={{ transform: `rotate(${90 + rotationAngle}deg)` }}
            >
              <Image src={EyeImage} alt="Rick Left Eye" layout="fill" />
            </div>
          </div>
          <div className={styles.rick_eyes_right}>
            <div
              className={styles.rick_eyes_right_image}
              style={{ transform: `rotate(${90 + rotationAngle}deg)` }}
            >
              <Image src={EyeImage} alt="Rick Right Eye" layout="fill" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cover} />
    </div>
  );
};

export default ProximityContainer;
