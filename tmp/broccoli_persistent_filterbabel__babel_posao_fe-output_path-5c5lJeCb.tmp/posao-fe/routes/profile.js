define('posao-fe/routes/profile', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		korisnikService: Ember.inject.service('korisnik-service'),
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {

			if (!this.get('session.isAuthenticated')) {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var username = this.get("session.data.authenticated.username");
			var _profil = this.get('korisnikService').profil(username);

			return Ember.RSVP.hash({
				profil: _profil
			});
		}
	});
});