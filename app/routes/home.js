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
const LASTFM_ENDPOINT = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=2&user=lucideffective&api_key=${LASTFM_KEY}&format=json`;

export default Route.extend({
  api: service(),

  model() {
    let api = get(this, 'api');

    let hashOfPromises = {
      recentTracks: api.fetch(LASTFM_ENDPOINT)
        .then((response) => response.recenttracks),
    };

    return hash(hashOfPromises);
  },
});
