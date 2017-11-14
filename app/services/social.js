import { get } from '@ember/object';
import Service from '@ember/service';
import { resolve } from 'rsvp';
import injectService from 'ember-service/inject';

const endpoints = {
  lastfm: 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=3&user=lucideffective&api_key=45c2ed86bea3e8d841b7d430ba0e605e&format=json',
  zombies: 'https://api.zombiesrungame.com/runs/11464889/',
  instagram: 'https://api.instagram.com/v1/users/1351380575/media/recent/?access_token=1351380575.bf6a840.ba968d7f9d0940c2be6dc06e0a7efe06',
  twitter: 'https://us-central1-personal-portfolio-b7670.cloudfunctions.net/twitterFeed',
  github: 'https://api.github.com/users/thelucideffect/events/public',
};

export default Service.extend({
  api: injectService(),
  fastboot: injectService(),

  fetch(type, useJSONP) {
    let api = get(this, 'api');
    let isFastBoot = get(this, 'isFastBoot');
    let shoebox = get(this, 'fastboot.shoebox');

    if(!isFastBoot) {
      let data = shoebox.retrieve(type);
      if(data) {
        return resolve(data);
      }
    }

    let fetchMethod = useJSONP ? api.fetchJSON : api.fetch;

    return fetchMethod(endpoints[type])
      .then((response) => {
        if(isFastBoot) {
          shoebox.put(type);
        }

        return response;
      })
      .catch((err) => err);
  },
});
