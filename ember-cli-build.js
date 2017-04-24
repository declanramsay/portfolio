/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'esw-cache-fallback': {
      patterns: [
        'https://personal-portfolio-b7670.firebaseio.com/(.+)',
        'https://ws.audioscrobbler.com/2.0/(\\S*)',
        'https://api.zombiesrungame.com/runs/(.+)',
        'https://api.instagram.com/v1/users/1351380575/media/recent/(\\S*)',
        'https://us-central1-personal-portfolio-b7670.cloudfunctions.net/twitterFeed',
        'https://api.github.com/users/thelucideffect/events/public',
      ],

      version: '1',
    },

    fingerprint: {
      exclude: ['images/projects'],
    },

    sassOptions: {
      includePaths: ['app/styles'],
    },

    dotEnv: {
      clientAllowedKeys: ['AWS_ACCESS_KEY', 'AWS_SECRET_ACCESS_KEY'],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
