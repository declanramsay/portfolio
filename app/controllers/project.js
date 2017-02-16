import Ember from 'ember';

const {
  computed: { reads },
  Controller,
} = Ember;

export default Controller.extend({
  project: reads('model.project'),
});
