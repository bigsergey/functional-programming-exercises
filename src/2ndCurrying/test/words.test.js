import test from 'ava';

import {words} from '../index';

test('should be a function', t => {
  t.is(typeof words, 'function');
});

test('should return split array', t => {
  t.deepEqual(words(''), ['']);
});

test('should return split array', t => {
  t.deepEqual(words('a b'), ['a', 'b']);
});


