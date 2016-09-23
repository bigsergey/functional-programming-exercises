import R from 'ramda';

export function add(a, b) {
  return a + b;
}

export const curryAdd = R.curry(add);