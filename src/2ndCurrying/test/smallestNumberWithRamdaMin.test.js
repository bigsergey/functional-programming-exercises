import test from 'ava';

import {smallestNumberWithRamdaMin} from '../index';

test('should be a function', t => {
  t.is(typeof smallestNumberWithRamdaMin, 'function');
});

test('should return smallest number -7', t => {
  t.deepEqual(smallestNumberWithRamdaMin([11, -7]), -7);
});

test('should return smallest number 0', t => {
  t.deepEqual(smallestNumberWithRamdaMin([undefined, 0]), 0);
});

test('should return smallest number 0', t => {
  t.deepEqual(smallestNumberWithRamdaMin([0]), 0);
});

test('should return smallest number Infinity', t => {
  t.deepEqual(smallestNumberWithRamdaMin([]), Infinity);
});

test('should return smallest number Infinity', t => {
  t.deepEqual(smallestNumberWithRamdaMin([Infinity, Infinity]), Infinity);
});
