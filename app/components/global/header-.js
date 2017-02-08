import Ember from 'ember';
import Headroom from 'headroom';

const {
  Component,
  run: { later },
} = Ember;

export default Component.extend({
  tagName: 'div',
  didInsertElement() {
    let _this = this;
    let header = this.$('.Header--headroom').get(0);

    let headroom  = new Headroom(header, {
      offset: 220,
      classes: {
        initial: 'hidden',
      },
      onUnpin() {
        _this.$('.Header--headroom').removeClass('hidden');
      },

      onTop() {
        later(() => {
          _this.$('.Header--headroom').addClass('hidden');
        }, 200);
      },
    });

    headroom.init();
  },
});
