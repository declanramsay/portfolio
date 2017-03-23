import Ember from 'ember';
import injectService from 'ember-service/inject';

const {
  get,
  Service,
} = Ember;

const endpoints = {
  lastfm: 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=3&user=lucideffective&api_key=45c2ed86bea3e8d841b7d430ba0e605e&format=json',
  zombies: 'https://api.zombiesrungame.com/runs/11464889/',
  instagram: 'https://api.instagram.com/v1/users/1351380575/media/recent/?access_token=1351380575.bf6a840.ba968d7f9d0940c2be6dc06e0a7efe06',
  twitter: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=thelucideffect&count=2',
  github: 'https://api.github.com/users/thelucideffect/events/public',
};

export default Service.extend({
  api: injectService(),

  fetch(type, useJSONP) {
    let api = get(this, 'api');
    if(!useJSONP) {
      return api.fetch(endpoints[type])
      .then((response) => response)
      .catch((err) => err);
    }

    return api.fetchJSON(endpoints[type])
      .then((response) => response)
      .catch((err) => err);
  },
});
