import Ember from 'ember';

const {
  Component,
  computed,
  get,
} = Ember;

export default Component.extend({
  // attrs
  run: null,
  reading: null,
  recentTracks: null,

  tracks: computed('recentTracks', function() {
    let { track } = get(this, 'recentTracks');

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

  latestRun: computed('run', function() {
    let { metrics, summary: { first_mission: missionCode }, id } = get(this, 'run');
    let time = Math.round((metrics.duration / 60) * 100) / 100;
    let distance = Math.round((metrics.distance / 1000) * 100) / 100;
    let link = `https://zombiesrungame.com/zombielink/runs-detailed/${id}/public/`;

    return { time, distance, missionCode, link };
  }),
});
