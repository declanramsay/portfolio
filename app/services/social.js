import Ember from 'ember';

const {
  get,
  inject: { service },
  Service,
} = Ember;

const endpoints = {
  lastfm: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=3&user=lucideffective&api_key=45c2ed86bea3e8d841b7d430ba0e605e&format=json',
  zombies: 'https://api.zombiesrungame.com/runs/11352204/',
};

export default Service.extend({
  api: service(),

  fetch(type) {
    let api = get(this, 'api');
    return api.fetch(endpoints[type])
      .then((response) => response)
      .catch((err) => err);
  },
});
