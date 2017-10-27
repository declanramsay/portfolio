import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { computed, get } from '@ember/object';

export default Component.extend({
  skills: reads('project.skills'),

  lastSkillIndex: computed('skills', function() {
    let skills = get(this, 'skills');

    if(skills) {
      return skills.length - 1;
    }
  }),
});
