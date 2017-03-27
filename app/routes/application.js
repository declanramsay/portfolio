import Ember from 'ember';
import injectService from 'ember-service/inject';
import { task } from 'ember-concurrency';

const {
  Route,
  get,
  $: $$,
} = Ember;

export default Route.extend({
  fastboot: injectService(),

  afterModel(model, transition) {
    this._super(model, transition);
    let isFastboot = get(this, 'fastboot.isFastBoot');
    if(isFastboot) {
      return;
    }
    get(this, 'removeAppLoader').perform();
  },

  // TODO: Reinstate
  removeAppLoader: task(function* () {
    let bal = $$('#before-app-loader');
    if(!bal.length) {
      return;
    }
    bal.remove();
  }),
});
