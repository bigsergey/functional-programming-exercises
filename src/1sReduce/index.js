Array.prototype.reduceForEach = function(callback) {
    this.reduce((prev, current, index, array) => {
        callback(array[index], index, array);
    },0);
};

Array.prototype.reduceMap = function(callback) {
    let arr = [];
    this.reduce((prev, current, index, array) => {
        arr.push(callback(array[index], index, array));
    },0);
    return arr;
};

Array.prototype.reduceFilter = function(callback, context) {
    let arr = [];
    this.reduce((prev, current, index, array) => {
        if (callback.call(context, array[index], index, array)) {
            arr.push(array[index]);
        }
    },0);
    return arr;
};

Array.prototype.reduceReduceRight = function(callback, initialVal) {
    let acc = (initialVal === undefined) ? undefined : initialVal;
    this.reduce((prev, current, index, array) => {
        if (acc !== undefined) {
            acc = callback.call(undefined, acc, array[array.length-index-1], array.length-index-1, this);
        }
        else {
            acc = array[array.length-index-1];
        }
    },0);
    return acc;
};

Array.prototype.reduceSome = function(callback, context) {
    let result = false;
    this.reduce((prev, current, index, array) => {
        let val = callback.call(context, array[index], index, array);
        result+=val;
    },0);
    return Boolean(result);
};
