import Ember from 'ember';

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

const PROJECT_ENDPOINT = 'https://personal-portfolio-b7670.firebaseio.com/projects.json';

export default Route.extend({
  api: service(),

  model() {
    let api = get(this, 'api');

    let hashOfPromises = {
      projects: api.fetch(PROJECT_ENDPOINT).then((response) => response),

      // TODO move social-calls to service (don't hold up site for)
      recentTracks: api.fetch(LASTFM_ENDPOINT).then((response) => response.recenttracks),
      run: api.fetch(ZOMBIESRUN_ENDPOINT).then((response) => response),
    };

    return hash(hashOfPromises);
  },
});
