import Ember from 'ember';
import Headroom from 'npm:headroom.js';

const {
  Component,
  get,
} = Ember;

export default Component.extend({
  tagName: 'div',
  classNames: ['container'],

  didInsertElement() {
    let isFastBoot = get(this, 'fastboot.isFastBoot');

    if(isFastBoot) {
      return;
    }

    let header = this.$('.Header--headroom').get(0);

    let headroom = new Headroom(header, {
      offset: 220,
    });

    headroom.init();
  },
});
