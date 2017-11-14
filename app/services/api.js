import { reject, resolve } from 'rsvp';
import Service from '@ember/service';
import fetch from 'fetch';
import fetchJsonp from 'npm:fetch-jsonp';

const checkStatus = function(response) {
  if(response.status >= 200 && response.status < 300) {
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

  fetchJSON(id) {
    return fetchJsonp(id)
      .then((response) => {
        return response.json()
          .then((json) => json);
      })
      .catch((err) => err);
  },
});
