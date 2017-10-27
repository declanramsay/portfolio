import { get } from '@ember/object';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import injectService from 'ember-service/inject';

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
