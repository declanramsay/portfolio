import Ember from 'ember';
import injectService from 'ember-service/inject';

const {
  Component,
  get,
} = Ember;

export default Component.extend({
  tagName: 'div',
  classNames: ['container'],
  fastboot: injectService(),

  didInsertElement() {
    let isFastBoot = get(this, 'fastboot.isFastBoot');

    if(isFastBoot) {
      return;
    }

    let header = this.$('.Header--headroom').get(0);

    /* eslint-disable */
    let headroom = new Headroom(header, {
    /* eslint-enable */
      offset: 220,
    });

    headroom.init();
  },
});
