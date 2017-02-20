import Ember from 'ember';

const {
  get,
  Component,
  computed,
} = Ember;

export default Component.extend({
  items: computed('projects', function() {
    let projects = get(this, 'projects');
    let arr = Object.keys(projects).map((k) => projects[k]);
    return arr.sort((a, b) => a.order - b.order);
  }),
});
