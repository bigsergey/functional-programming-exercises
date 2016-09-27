export function forEach(array, callback = () => {}, i = 0) { 
  if (i === array.length) {
    return;
  }
  
  callback(array[i], i);
  forEach(array, callback, ++i);
}

export function flatMapDeep(array, tmpArray = []) {
  _.forEach(array, (item) => {
    if(_.isArray(item)) {
      flatMapDeep(item, tmpArray);
    } else {
      tmpArray.push(item)
    }
  });
  return tmpArray;
}
