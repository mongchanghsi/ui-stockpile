// Utility functions
import { POSITION, ALIGNMENT, SPREAD } from './constants';

export const STYLES = {
  CONTAINER: {
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  CARD: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transition: 'all 0.6s',
  },
};

/**
 * @param {String} position
 * @returns {Number}
 */
export const getOpacity = (
  position: POSITION,
  iteration: number,
  index: number,
  totalListLength: number
) => {
  console.log(totalListLength);
  if (
    iteration === 0 &&
    position === POSITION.PREV &&
    index === totalListLength - 1
  )
    return 0;
  if (position === POSITION.HIDDEN) return 0;
  return 1;
};

export const getDisplay = (
  position: POSITION,
  iteration: number,
  index: number,
  totalListLength: number
) => {
  if (
    iteration === 0 &&
    position === POSITION.PREV &&
    index === totalListLength - 1
  )
    return 'none';
  if (position === POSITION.HIDDEN) return 'none';
  return 'block';
};

/**
 * @param {String} position
 * @returns {Number}
 */
export const getZIndex = (position: POSITION) => {
  if (position === POSITION.HIDDEN) return 0;
  if (position === POSITION.CURRENT) return 2;
  return 1;
};

export const getTransform = (
  position: POSITION,
  alignment: ALIGNMENT,
  spread: SPREAD
) => {
  const { prev, next, next_next } = _getTranslationDistances(spread);

  if (alignment === ALIGNMENT.HORIZONTAL) {
    if (position === POSITION.PREV) return `translateX(${prev}) scale(0.82)`;
    if (position === POSITION.NEXT) return `translateX(${next}) scale(0.82)`;
    if (position === POSITION.NEXT_NEXT)
      return `translateX(${next_next}) scale(0.82)`;
  }

  if (position === POSITION.HIDDEN) return `scale(0.5)`;

  return 'scale(1)';
};

/**
 * @param {String} spread
 * @returns {Object}
 */
const _getTranslationDistances = (spread: SPREAD) => {
  let current, prev, next, next_next;
  if (spread === SPREAD.MEDIUM) {
    prev = '-85%';
    next = '-15%';
    next_next = '-30%';
  } else if (spread === SPREAD.NARROW) {
    prev = '-75%';
    next = '-25%';
    next_next = '-50%';
  } else if (spread === SPREAD.WIDE) {
    prev = '-95%';
    next = '-5%';
    next_next = '-50%';
  } else if (spread === SPREAD.CUSTOM) {
    prev = '-15vw';
    next = '15vw';
    next_next = '30vw';
  }

  return { prev, next, next_next, current };
};
