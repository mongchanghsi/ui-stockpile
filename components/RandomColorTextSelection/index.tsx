import { useState } from "react";
import styles from "./index.module.scss";
import { ColorPalette } from "../../utils/constants/data";

const RandomColorTextSelection = () => {
  const [randomBgColor, setRandomBgColor] = useState<string>(ColorPalette[0]);

  const handleRandomBgColor = () => {
    setRandomBgColor(
      ColorPalette[Math.floor(Math.random() * ColorPalette.length)]
    );
  };
  return (
    <div className={styles.main}>
      <p
        style={{ ["--random-color" as string]: randomBgColor }}
        onMouseDown={() => handleRandomBgColor()}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default RandomColorTextSelection;
