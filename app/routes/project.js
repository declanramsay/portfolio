import { get } from '@ember/object';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import injectService from 'ember-service/inject';

export default Route.extend({
  api: injectService(),
  fastboot: injectService(),

  model(params) {
    let api = get(this, 'api');
    let request = `https://personal-portfolio-b7670.firebaseio.com/projects/${params.projectId}.json`;

    return hash({
      project: api.fetch(request).then((response) => response),
    });
  },

  activate() {
    this._super(...arguments);
    if(!get(this, 'fastboot.isFastBoot')) {
      window.scrollTo(0, 0);
    }
  },
});
