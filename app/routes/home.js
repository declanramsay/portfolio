import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
  RSVP: { hash },
} = Ember;

const PROJECT_ENDPOINT = 'https://personal-portfolio-b7670.firebaseio.com/projects.json';

export default Route.extend({
  api: service(),

  model() {
    let api = get(this, 'api');

    let hashOfPromises = {
      projects: api.fetch(PROJECT_ENDPOINT).then((response) => response),
    };

    return hash(hashOfPromises);
  },
});
