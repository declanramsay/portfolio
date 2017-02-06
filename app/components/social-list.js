import Ember from 'ember';

const {
  Component,
  computed,
  get,
  // computed: { reads },
} = Ember;

export default Component.extend({
  tracks: computed('recentTracks', function() {
    let { track } = get(this, 'recentTracks');
    return track.map((t) => {
      let artist = get(t, 'artist.#text');
      return {
        name: t.name,
        artist,
      };
    });
  }),
});
