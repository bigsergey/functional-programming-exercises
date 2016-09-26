import 'babel-polyfill';

import {add} from './exampleFunction';

import {words, increaseArray, smallestNumber} from './2ndCurrying'

console.log(add(1, 3));

console.log(words('a b c'));
console.log(increaseArray([1,2,3,4], 1));
console.log(smallestNumber([1,2,3,4]));
