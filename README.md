## The repository contains solutions to the following tasks

### To run project

To install dependences
```
$ npm install
```

To run tests
```
$ npm test
```

To watch tests
```
$ npm run test:watch
```


## Exercises for learning functional programming in JS

During implementation you can use libraries like ramda, lodash, underscore, etc. For each exercise you have to write tests.

Link to presentation: [Functional programming in Javascript](https://docs.google.com/a/apptension.com/presentation/d/1tYDuotn4MvNy3qKSeMBlDHgGhwQropTAbp-EbaHG3Mg/edit?usp=sharing)

### First exercise - Reduce

Implement forEach, map, filter, [reduceRight](https://lodash.com/docs#reduceRight) and [some](https://lodash.com/docs#some) using only reduce.

### Second exercise - Currying

Using only currying and split make a function called "words" that returns a list of words in a string.
Split function is in Ramda [R.split](http://ramdajs.com/docs/#split) or in lodash [_.split](https://lodash.com/docs#split) or you can use any another function that works similar to JavaScript String split() method.

```js
words('a b c'); // ['a', 'b', 'c']
```

Using only add and map functions create a function that increases every number in array.

```js
function add(a, b) {
  return a + b;
}
```

Make a function to find the smallest number in an array. Use only less function and one of the listed below functions:``` map```, ```filter```, ```reduce```.

```js
function less(a, b) {
  return a < b ? a : b;
}
```

### Third exercise - Recursion

Implement a recursive version of the [flatMapDeep](https://lodash.com/docs#flatMapDeep) function.
Implement a recursive version of the [forEach](https://lodash.com/docs#forEach) function.

### Fourth exercise - composing, currying, streams(?), etc.

Using [Web Service](https://wiki.musicbrainz.org/Development/JSON_Web_Service) of "MusicBrainz project" do following tasks:
- Display average length of tracks in the release and in the every single disk. [Link to data](http://musicbrainz.org/ws/2/release/a4864e94-6d75-4ade-bc93-0dabf3521453?fmt=json&inc=recordings+release-groups+artists).
- Display album titles list with release date. Albums can not be of a type "compilation". The list should be sorted by the release date of the album. [Link to data](http://musicbrainz.org/ws/2/artist/83d91898-7763-47d7-b03b-b92132375c47?fmt=json&inc=release-groups).
- Present the results in a fancy way! The better, the more points you will get.
- *Additional task:* try to get any additional/interesting information from the database using as many functions as possible from lodash or Ramda.

### Fifth exercise (extra credit)

Using only `reduce` implement functions: `sum`, `any`, `max`, `concat`. Extract the common parts of this, propose API, describe the structure of common parts.
