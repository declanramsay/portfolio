import Ember from 'ember';
import config from './config/environment';

const {
  Router: EmberRouter,
} = Ember;

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('sitemap-txt', { path: 'sitemap.txt' }); // Required by ember-cli-prerender
  this.route('home', { path: '/' });
  this.route('project', { path: 'projects/:projectId' });
});

export default Router;
