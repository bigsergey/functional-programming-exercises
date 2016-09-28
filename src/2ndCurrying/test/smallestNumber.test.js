import test from 'ava';

import {smallestNumber, smallestNumberWithRamdaMin} from '../index';

test('should be a function', t => {
  t.is(typeof smallestNumber, 'function');
});

test('should be a function', t => {
  t.is(typeof smallestNumberWithRamdaMin, 'function');
});

test('should return smallest number -5', t => {
  t.deepEqual(smallestNumber([-5, 7]), -5);
});

test('should return smallest number -7', t => {
  t.deepEqual(smallestNumberWithRamdaMin([11, -7]), -7);
});

test('should return smallest number Infinity', t => {
  t.deepEqual(smallestNumberWithRamdaMin([Infinity, Infinity]), Infinity);
});

