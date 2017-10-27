/* global Headroom */
import Component from '@ember/component';

import { get } from '@ember/object';
import $ from 'jquery';
import injectService from 'ember-service/inject';

export default Component.extend({
  tagName: 'div',
  fastboot: injectService(),

  didInsertElement() {
    let isFastBoot = get(this, 'fastboot.isFastBoot');
    if(isFastBoot) {
      return;
    }

    let header = $('.Header--headroom').get(0);

    let headroom = new Headroom(header, {
      offset: 220,
    });

    headroom.init();
  },
});
