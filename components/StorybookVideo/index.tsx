import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './index.module.scss';

const StorybookVideo = () => {
  const [start, setStart] = useState(false)
  return (
    <div className={styles.main}>
      <ReactPlayer
        playing={start}
        url='/assets/book_animation.mp4'
      />
      <button
        onClick={() => {
          setStart(true)
          setTimeout(() => setStart(false), 5000)
        }}
      >
        Start
      </button>
    </div>
  )
}

export default StorybookVideo
