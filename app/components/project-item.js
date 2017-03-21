import Ember from 'ember';

const {
  Component,
  computed,
  computed: { reads },
  get,
} = Ember;

export default Component.extend({
  skills: reads('project.skills'),

  lastSkillIndex: computed('skills', function() {
    let skills = get(this, 'skills');

    if(skills) {
      return skills.length - 1;
    }
  }),
});
