import test from 'ava';

import {smallestNumber} from '../index';

test('should be a function', t => {
  t.is(typeof smallestNumber, 'function');
});

test('should return smallest number -5', t => {
  t.deepEqual(smallestNumber([-5, 7]), -5);
});

test('should return smallest number 0', t => {
  t.deepEqual(smallestNumber([, 0]), 0);
});

test('should return smallest number -10', t => {
  t.deepEqual(smallestNumber([-10, 1, 2, 3, 4, ]), -10);
});

test('should return smallest number Infinity', t => {
  t.deepEqual(smallestNumber([]), Infinity);
});
