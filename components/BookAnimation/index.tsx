import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './index.module.scss';

const determineStage = (timestamp: number) => {
  if (timestamp <= 0) {
    return 0;
  } else if (timestamp > 0 && timestamp < 7) {
    return 0;
  } else if (timestamp >= 7 && timestamp < 14) {
    return 1;
  } else if (timestamp >= 14 && timestamp < 21) {
    return 2;
  } else if (timestamp >= 21) {
    return 3;
  } else {
    return 0;
  }
};

const determineDuration = (stage: number) => {
  switch (stage) {
    case 0:
      return 7000;
    case 1:
      return 7000;
    case 2:
      return 7000;
    case 3:
      return 7000;
    default:
      return 0;
  }
};

const BookAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const [stage, setStage] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentTimestamp = playerRef.current.getCurrentTime();
  //     const currentStage = determineStage(currentTimestamp);
  //     if (currentStage !== stage) {
  //       stage = currentStage;
  //       setIsPlaying(false);
  //     }
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleStage = () => {
  //   if (stage === 3) return;
  //   setIsPlaying(true);
  // };

  const handleStage = () => {
    if (stage === 3) return;
    setIsPlaying(true);
    const duration = determineDuration(stage);
    setTimeout(() => {
      setStage((prevState) => prevState + 1);
      setIsPlaying(false);
    }, duration);
  };

  return (
    <div className={styles.main}>
      <div className={styles.video}>
        <ReactPlayer
          playing={isPlaying}
          ref={playerRef}
          url='/assets/book_animation.mp4'
          controls={false}
          width={'100%'}
          height={'100%'}
        />

        <button
          style={{ display: isPlaying ? 'none' : 'block' }}
          className={styles.button}
          type='button'
          onClick={() => handleStage()}
        >
          next stage
        </button>
      </div>
    </div>
  );
};

export default BookAnimation;
