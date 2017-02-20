import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
  RSVP: {
    hash,
  },
} = Ember;

export default Route.extend({
  api: service(),

  model(params) {
    let api = get(this, 'api');
    let request = `https://personal-portfolio-b7670.firebaseio.com/projects/${params.projectId}.json`;

    return hash({
      project: api.fetch(request).then((response) => response),
    });
  },

  activate() {
    this._super();
    window.scrollTo(0, 0);
  },
});
