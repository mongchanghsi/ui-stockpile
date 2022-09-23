import { useState, MouseEvent, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import ProximityContainer from "./ProximityContainer";
import ProximityTitle from "./ProximityTitle";

export interface IMovement {
  x: number;
  y: number;
}

/*
Determines how sensitive will the changes in X and Y of the images as the cursor moves
 The lower the value, the larger the movement will be
*/
const Sensitivity = 100;

const ProxmityHover = () => {
  const anchorContainerRef = useRef<any>(null);
  const [imageMovement, setImageMovement] = useState<IMovement>({
    x: 0,
    y: 0,
  });
  const [anchorContainerDimension, setAnchorContainerDimension] =
    useState<IMovement>({
      x: 0, // Assume width
      y: 0, // Assume height
    });

  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setImageMovement({
      x: e.clientX / Sensitivity,
      y: e.clientY / Sensitivity,
    });

    if (anchorContainerDimension.x && anchorContainerDimension.y) {
      setRotationAngle(
        calculateAngleEyeMovement(
          e.clientX,
          e.clientY,
          anchorContainerDimension.x,
          anchorContainerDimension.y
        )
      );
    }
  };

  const calculateAngleEyeMovement = (
    cx: number,
    cy: number,
    ex: number,
    ey: number
  ) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    return (rad * 180) / Math.PI;
  };

  useEffect(() => {
    if (anchorContainerRef.current) {
      const _container = anchorContainerRef.current.getBoundingClientRect();
      setAnchorContainerDimension({
        x: _container.width,
        y: _container.height,
      });
    }
  }, [anchorContainerRef]);

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <ProximityTitle data={imageMovement} />
      <div ref={anchorContainerRef}>
        <ProximityContainer rotationAngle={rotationAngle} />
      </div>
    </div>
  );
};

export default ProxmityHover;
