define('posao-fe/routes/pregled-notifikacija', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		porukeService: Ember.inject.service('poruke-service'),
		korisnikService: Ember.inject.service('korisnik-service'),
		session: Ember.inject.service('session'),

		profil: {},

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC" && this.get('session.data.authenticated.role') !== "ROLE_NEZAPOSLENI") {
				return this.transitionTo("unauthorized");
			}
			this.set("session.imaNeprocitanih", false);
		},

		model: function model(params, transition) {
			var userid = this.get("session.data.authenticated.userid");
			var _poruke = this.get("porukeService").all(userid);

			return Ember.RSVP.hash({
				poruke: _poruke
			});
		}

	});
});