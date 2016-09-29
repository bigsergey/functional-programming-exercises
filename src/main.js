import 'babel-polyfill';

import './4thMusicBrainz';

import {words, increaseArray, smallestNumber, smallestNumberWithRamdaMin} from './2ndCurrying'
import {forEach} from './3rdRecursion';

console.log(words('a b c'));
console.log(increaseArray(1)([1, 2, 3, 4]));
console.log(smallestNumber([1, 2, 3, 4]));
//or we can use R.min of ramda
console.log(smallestNumberWithRamdaMin([1, 2, 3, 4]));


forEach([11111111, 23], d => console.log(d));
