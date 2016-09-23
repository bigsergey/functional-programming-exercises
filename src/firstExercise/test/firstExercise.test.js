import test from 'ava';

import {exampleFunction} from '../firstExercise';

test('should be a function', t => {
  t.is(typeof exampleFunction, 'function');
});

test('should return proper result', t => {
  t.is(exampleFunction(2, 2), 4);
});