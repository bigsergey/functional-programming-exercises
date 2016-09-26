export function forEach(array, callback = () => {}, i = 0) { 
  if (i === array.length) {
    return;
  }
  
  callback(array[i], i);
  forEach(array, callback, ++i);
}
