import test from 'ava';
import R from 'ramda';

import {forEach} from '../index';

test('should be a function', t => {
  t.is(typeof forEach, 'function');
});

test('should not change array', t => {
  const arr = [1, 2, 3, 4];

  forEach(arr, R.identity)

  t.deepEqual(arr, [1, 2, 3, 4]);
});

test('should change an array', t => {
  const arr = [1, 2, 3];

  forEach(arr, (d, i) => arr[i] += 1);

  t.deepEqual(arr, [2, 3, 4]);
});
