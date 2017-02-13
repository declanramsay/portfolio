import Ember from 'ember';
import Headroom from 'headroom';

const {
  Component,
} = Ember;

export default Component.extend({
  tagName: 'div',
  didInsertElement() {
    let header = this.$('.Header--headroom').get(0);

    let headroom  = new Headroom(header, {
      offset: 220,
    });

    headroom.init();
  },
});
