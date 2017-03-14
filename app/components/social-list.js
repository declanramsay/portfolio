import Ember from 'ember';
import injectService from 'ember-service/inject';
import moment from 'npm:moment';

const {
  Component,
  computed,
  get,
  RSVP: { hash },
  setProperties,
} = Ember;

export default Component.extend({
  social: injectService(),
  lastfm: null,
  zombies: null,

  tracks: computed('lastfm', function() {
    let lastfm = get(this, 'lastfm');
    if(!lastfm) {
      return;
    }

    let { recenttracks: recentTracks } = lastfm;
    let { track } = recentTracks;

    return track.map((t, i) => {
      let artist = get(t, 'artist.#text');
      let isLast = i + 1 === track.length;
      return {
        name: t.name,
        artist,
        isLast,
      };
    });
  }),

  latestRun: computed('zombies', function() {
    let zombies = get(this, 'zombies');
    if(!zombies) {
      return;
    }

    let { metrics, summary: { first_mission: missionCode }, id } = zombies;
    let time = Math.round((metrics.duration / 60) * 100) / 100;
    let distance = Math.round((metrics.distance / 1000) * 100) / 100;
    let link = `https://zombiesrungame.com/zombielink/runs-detailed/${id}/public/`;

    return { time, distance, missionCode, link };
  }),

  latestPhoto: computed('instagram', function() {
    let instagram = get(this, 'instagram');
    if(!instagram) {
      return;
    }

    let { data: [latestPhoto] } = instagram;

    let { images, link } = latestPhoto;

    let image = images.standard_resolution;
    return { image, link };
  }),

  latestCommit: computed('github', function() {
    let github = get(this, 'github');
    if(!github) {
      return;
    }

    let [latest] = github;
    let { created_at: createdAt, repo: { url, name } } = latest;
    let time = moment(createdAt).fromNow();
    return { url, name, time };
  }),

  didInsertElement() {
    this._super(...arguments);

    let s = get(this, 'social');

    let hashOfPromises = hash({
      zombies: s.fetch('zombies'),
      lastfm: s.fetch('lastfm'),
      instagram: s.fetch('instagram', true),
      github: s.fetch('github'),
    });

    return hashOfPromises
      .then(({ zombies, lastfm, instagram, github }) => {
        setProperties(this, {
          instagram,
          zombies,
          lastfm,
          github,
        });
      });
  },
});
