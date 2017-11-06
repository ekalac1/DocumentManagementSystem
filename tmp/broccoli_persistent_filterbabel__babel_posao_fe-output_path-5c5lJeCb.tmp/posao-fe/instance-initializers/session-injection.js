define('posao-fe/instance-initializers/session-injection', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "session-injection",
    after: 'ember-simple-auth',

    initialize: function initialize(appInstance) {
      appInstance.inject('route', 'session', 'service:session');
      /*    appInstance.inject('route', 'currentUser', 'service:current-user');
          appInstance.inject('controller', 'session', 'service:session');
          appInstance.inject('component', 'session', 'service:session');
          appInstance.inject('component', 'currentUser', 'service:current-user');
          appInstance.inject('service:current-user', 'session', 'service:session');*/
    }
  };
});