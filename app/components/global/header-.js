import Ember from 'ember';
import Headroom from 'headroom';

const {
  Component,
} = Ember;

export default Component.extend({
  tagName: 'div',
  // classNames: 'Header row',

  didInsertElement() {
    let _this = this;
    let header = this.$('.Header--headroom').get(0);

    let headroom  = new Headroom(header, {
      offset: 250,
      classes: {
        initial: 'hidden',
        // unpinned: 'headroom--pinned',
        // top: 'hidden',
      },
      onUnpin() {
        _this.$('.Header--headroom').removeClass('hidden');
      },

      onTop() {
        _this.$('.Header--headroom').addClass('hidden');
      },
    });
    // initialise
    headroom.init();
  },
});
