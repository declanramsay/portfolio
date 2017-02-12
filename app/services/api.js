import Ember from 'ember';
import fetch from 'fetch';
// import fetchJsonP from 'npm:fetch-jsonp';

const {
  RSVP: {
    resolve,
    reject,
  },
  Service,
} = Ember;

const checkStatus = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return resolve(response);
  }

  let error = new Error(response.statusText);
  error.response = response;
  return reject(error);

};
export default Service.extend({
  fetch(id) {
    return fetch(id, {
      method: 'GET',
    })
      .then(checkStatus)
      .then((response) => {
        return response.json()
          .then((json) => json);
      })
      .catch((error) => {
        return error;
      });
  },

  // fetchJsonP(id) {
  //   return fetchJsonP(id, {
  //     method: 'GET',
  //   })
  //     .then(checkStatus)
  //     .then((response) => response);
  //       return response.json()
  //         .then((json) => json);
  //     });
  // },
});
