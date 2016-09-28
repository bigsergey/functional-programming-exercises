import R from 'ramda';
import Rx from 'rx';

import {log, fetchData} from './utils';

const URL = 'http://musicbrainz.org/ws/2/release/a4864e94-6d75-4ade-bc93-0dabf3521453';
const QUERY = 'fmt=json&inc=recordings+release-groups+artists';

const avg = R.converge(R.divide, [R.sum, R.length]);

const extractTracks = R.compose(R.map(R.prop('length')), R.flatten, R.map(R.prop('tracks')), R.prop('media'));

const avgTrackTime = R.compose(log, avg, extractTracks);

const tracks = fetchData(URL, QUERY).subscribe(avgTrackTime);

