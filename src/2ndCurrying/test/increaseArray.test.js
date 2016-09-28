import test from 'ava';

import {increaseArray} from '../index';


test('should be a function', t => {
  t.is(typeof increaseArray, 'function');
});

test('should return increase value by 2', t => {
  t.deepEqual(increaseArray(2, [1, 2]), [3, 4]);
});

test('should return increase value by 10', t => {
  t.deepEqual(increaseArray(10)([1, 2]), [11, 12]);
});

test('should return increase value by -2', t => {
  t.deepEqual(increaseArray(-2, [5, 9]), [3, 7]);
});

test('should return Infinity', t => {
  t.deepEqual(increaseArray(Infinity, [5, 9]), [Infinity, Infinity]);
});

