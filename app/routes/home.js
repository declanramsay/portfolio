import Ember from 'ember';
import injectService from 'ember-service/inject';

const {
  get,
  Route,
  RSVP: { hash },
} = Ember;

const PROJECT_ENDPOINT = 'https://personal-portfolio-b7670.firebaseio.com/projects.json';

export default Route.extend({
  api: injectService(),

  model() {
    let api = get(this, 'api');

    let hashOfPromises = {
      projects: api.fetch(PROJECT_ENDPOINT).then((response) => response),
    };

    return hash(hashOfPromises);
  },
});
