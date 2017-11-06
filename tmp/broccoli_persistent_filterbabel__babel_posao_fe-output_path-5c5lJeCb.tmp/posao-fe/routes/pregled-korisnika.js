define('posao-fe/routes/pregled-korisnika', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		korisnikService: Ember.inject.service('korisnik-service'),

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			return Ember.RSVP.hash({
				korisnici: this.get("korisnikService").nezaposleni()
			});
		}
	});
});