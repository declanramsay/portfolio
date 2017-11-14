import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  items: computed('projects', function() {
    let projects = get(this, 'projects');
    let arr = Object.keys(projects).map((k) => projects[k]);
    return arr.sort((a, b) => a.order - b.order).reverse();
  }),
});
