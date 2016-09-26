const URL = 'http://musicbrainz.org/ws/2/release/a4864e94-6d75-4ade-bc93-0dabf3521453';
const QUERY = 'fmt=json&inc=recordings+release-groups+artists';

const fetchData = fetch(`${URL}?${QUERY}`)
  .then(response => console.log(response))
  .catch(error => console.log(error));
