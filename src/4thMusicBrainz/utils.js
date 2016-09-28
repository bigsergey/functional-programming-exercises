import R from 'ramda';
import $ from 'jquery';

export const log = R.tap(console.log);

export const logArray = R.tap(console.table);

export const fetchData = R.curry((url, query) => Rx.Observable.fromPromise($.getJSON({url: `${url}?${query}`})));
