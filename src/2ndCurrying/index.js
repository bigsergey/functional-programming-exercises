import R from 'ramda';

export const words = R.split(' ');

export function increaseArray(array, number) {
  return R.map(R.add(number), array)
}

const less = (a, b) => {
  return a < b ? a : b;
};

export function smallestNumber(array) {
  return R.reduce(less, array, array)
}
