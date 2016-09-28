import test from 'ava';

import {forEach} from '../index';

test('should be a function', t => {
    t.is(typeof forEach, 'function');
});