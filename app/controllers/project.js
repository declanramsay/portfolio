import { reads } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  project: reads('model.project'),
});
