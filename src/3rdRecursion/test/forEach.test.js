import test from 'ava';
import R from 'ramda';
import {spy} from 'sinon';

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

test('should call callback twice', t => {
  const callback = spy();
  const arr = ['a', 'b'];

  forEach(arr, callback);

  t.is(callback.calledTwice, true);
});

test('should call callback with proper arguments', t => {
  const callback = spy();
  const arr = ['a', 'b'];

  forEach(arr, callback);

  t.is(callback.getCall(0).args[0], 'a');
  t.is(callback.getCall(0).args[1], 0);

  t.is(callback.getCall(1).args[0], 'b');
  t.is(callback.getCall(1).args[1], 1);
});
