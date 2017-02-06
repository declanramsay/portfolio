import Ember from 'ember';
import fetch from 'fetch';

const {
  Service,
} = Ember;

export default Service.extend({
  // TODO error cases

  fetch(id) {
    return fetch(id)
      .then((response) => {
        return response.json()
          .then((json) => json);
      });
  },
});
