import styles from '../styles/About.module.scss';
import { getIconSvg, getIconSvgMobile } from '../utils';
import { SocialEnums } from '../utils/constants/enums';

const About = () => {
  return (
    <div id='AboutMeContainer' className={styles.container}>
      <div className={styles.main}>
        <h2 id='AboutMeTitle' className={styles.title}>
          UI-Stockpile
        </h2>
        <p className={styles.text}>
          Open-sourced platform where developers can contribute any interesting
          interfaces they come across and want to challenge themselves in
          recreating them. Feel free to contribute through pull request and
          remember to credit the design to the websites where you see them!
        </p>
        <a
          href='https://github.com/mongchanghsi/ui-stockpile'
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          {getIconSvg(SocialEnums.GITHUB)}
        </a>
      </div>
    </div>
  );
};

export default About;
