import 'babel-polyfill';

import {add} from './exampleFunction';

import {words, increaseArray, smallestNumber, smallestNumberWithRamdaMin} from './2ndCurrying'

console.log(add(1, 3));

console.log(words('a b c'));
console.log(increaseArray(1, [1,2,3,4]));
console.log(smallestNumber([1,2,3,4]));
//or we can use R.min of ramda
console.log(smallestNumberWithRamdaMin([1,2,3,4]));
