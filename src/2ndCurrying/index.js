import R from 'ramda';

export const words = R.split(' ');

export const increaseArray = (number, array) => R.map(R.add(number), array);

const less = (a, b) => {
  return a < b ? a : b;
};

export const smallestNumber = (array) => R.reduce(less, Infinity, array);

export const smallestNumberWithRamdaMin = (array) => R.reduce(R.min, Infinity, array);
