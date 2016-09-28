import R from 'ramda';

export const words = R.split(' ');

export const increaseArray = R.curry((number, array) => R.map(R.add(number), array));

const less = (a, b) => a < b ? a : b;

export const smallestNumber = R.reduce(less, Infinity);

export const smallestNumberWithRamdaMin = R.reduce(R.min, Infinity);
