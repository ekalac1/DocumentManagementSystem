define('posao-fe/controllers/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        session: Ember.inject.service('session'),
        porukeService: Ember.inject.service('poruke-service'),
        collapsedBool: false,
        credentialsError: false,
        collapsedStr: "collapse navbar-collapse",

        authenticate: function authenticate(credentials) {
            var authenticator = 'authenticator:jwt';
            return this.get('session').authenticate(authenticator, credentials);
        },

        actions: {

            login: function login(credentials, doRedirect) {
                var self = this;
                this.authenticate(credentials).then(function (value) {
                    self.set('credentialsError', false);
                    self.get("porukeService").getUnread(self.get("session.data.authenticated.userid")).then(function (data) {
                        return self.set("session.imaNeprocitanih", data);
                    });

                    if (doRedirect) self.transitionToRoute('index');
                }.bind(doRedirect), function (reason) {
                    self.set('credentialsError', true);
                });
            },

            collapse: function collapse() {
                var col = !this.get("collapsedBool");

                this.set("collapsedBool", col);

                if (col) {
                    this.set("collapsedStr", "collapse navbar-collapse in");
                } else {
                    this.set("collapsedStr", "collapse navbar-collapse");
                }
            },

            loginNormal: function loginNormal() {
                var credentials = this.getProperties('identification', 'password');
                this.send('login', credentials, true);
            },

            loginWithoutRedirect: function loginWithoutRedirect(credentials) {
                this.send('login', credentials, false);
            },

            logout: function logout() {
                this.get('session').invalidate();
            }
        }
    });
});