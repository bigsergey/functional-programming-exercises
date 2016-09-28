import R from 'ramda';
import Rx from 'rx';
import $ from 'jquery';

import {log, logArray} from './utils';

const URL = 'http://musicbrainz.org/ws/2/release/a4864e94-6d75-4ade-bc93-0dabf3521453';
const QUERY = 'fmt=json&inc=recordings+release-groups+artists';

const extractTracks = R.compose(R.map(R.prop('length')), R.flatten, R.map(R.prop('tracks')), R.prop('media'));

const avg = d => R.divide(R.sum(d), R.length(d));

const avgTrackTime = R.compose(log, avg, extractTracks);

const fetchData = () => Rx.Observable.fromPromise($.getJSON({url: `${URL}?${QUERY}`}));

const tracks = fetchData().subscribe(avgTrackTime);

