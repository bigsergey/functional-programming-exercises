import R from 'ramda';
import Rx from 'rx';
import $ from 'jquery';

import {logArray, fetchData} from './utils';

const URL = 'http://musicbrainz.org/ws/2/artist/83d91898-7763-47d7-b03b-b92132375c47';
const QUERY = 'fmt=json&inc=release-groups';

const isNotCompilation = R.compose(R.isEmpty, R.filter(R.equals('Compilation')), R.last);

const prepareReleases = R.compose(
  logArray,
  R.map(R.init),
  R.filter(isNotCompilation),
  R.map(R.props(['title', 'first-release-date', 'secondary-types'])),
  R.prop('release-groups')
);

const $results = $('#albums');

const tracks = fetchData(URL, QUERY).subscribe(
  res => $.each(prepareReleases(res), (_, value) => $(`<li>${value}</li>`).appendTo($results)),
  err => $(`<li>${err}</li>`).appendTo($results)
);
