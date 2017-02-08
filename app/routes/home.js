import Ember from 'ember';
// import injectService from 'ember-service/inject';

const {
  get,
  inject: { service },
  Route,
  RSVP: { hash },
} = Ember;

// TODO tidy
const LASTFM_KEY = '45c2ed86bea3e8d841b7d430ba0e605e';
const LASTFM_ENDPOINT = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=3&user=lucideffective&api_key=${LASTFM_KEY}&format=json`;

// Need a latest-run endpoint?
const ZOMBIESRUN_ENDPOINT = 'https://api.zombiesrungame.com/runs/11352204/';

const GOODREADS_KEY = '27ZN6DCnPq9MMYIPXEdmhA';
const GOODREADS_ENDPOINT = `https://www.goodreads.com/user_status/show/38626569?format=xml&key=${GOODREADS_KEY}`;

export default Route.extend({
  api: service(),

  model() {
    let api = get(this, 'api');

    let hashOfPromises = {
      recentTracks: api.fetch(LASTFM_ENDPOINT).then((response) => response.recenttracks),
      run: api.fetch(ZOMBIESRUN_ENDPOINT).then((response) => response),
      reading: api.fetch(GOODREADS_ENDPOINT).then((response) => response),
    };

    return hash(hashOfPromises);
  },
});
