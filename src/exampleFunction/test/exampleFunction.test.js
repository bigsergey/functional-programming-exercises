import test from 'ava';

import {add, curryAdd} from '../exampleFunction';

test('should be a function', t => {
  t.is(typeof add, 'function');
});

test('should return proper value', t => {
  t.is(add(2, 2), 4);
});

test('should be a function', t => {
  t.is(typeof curryAdd, 'function');
});

test('should be a function', t => {
  t.is(typeof curryAdd(2), 'function');
});

test('should return proper value', t => {
  t.is(curryAdd(2)(1), 3);
});
