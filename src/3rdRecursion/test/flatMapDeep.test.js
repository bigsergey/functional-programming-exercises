import test from 'ava';

import {flatMapDeep} from '../index';

test('should be a function', t => {
    t.is(typeof flatMapDeep, 'function');
});

test('should return empty array', t => {
    t.deepEqual(flatMapDeep([]), []);
});

test('should return array', t => {
    t.deepEqual(flatMapDeep([1,2,3,4,5]), [1,2,3,4,5]);
});

test('should return array #2', t => {
    t.deepEqual(flatMapDeep([1,2,[3],4,[[5]]]), [1,2,3,4,5]);
});