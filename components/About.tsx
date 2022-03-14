import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <div id='AboutMeContainer' className={styles.container}>
      <div className={styles.main}>
        <h2 id='AboutMeTitle' className={styles.title}>
          UI-Stockpile
        </h2>
        <p className={styles.text}>
          This repository and website serves as a platform for my friends and I
          to add in any interesting custom-built UI to be documented here. This
          will allow us to simply refer to here instead of recalling what was
          the name of the component or which repository did the component
          resides in. Please feel free to do a PR and contribute to this
          repository!
        </p>
        <a
          href='https://github.com/mongchanghsi/ui-stockpile'
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          https://github.com/mongchanghsi/ui-stockpile
        </a>
      </div>
    </div>
  );
};

export default About;
