/* global Headroom */
import Ember from 'ember';
import injectService from 'ember-service/inject';

const {
  Component,
  get,
  $: $$,
} = Ember;

export default Component.extend({
  tagName: 'div',
  // classNames: ['container'],
  fastboot: injectService(),

  didInsertElement() {
    let isFastBoot = get(this, 'fastboot.isFastBoot');
    if(isFastBoot) {
      return;
    }

    let header = $$('.Header--headroom').get(0);

    let headroom = new Headroom(header, {
      offset: 220,
    });

    headroom.init();
  },
});
