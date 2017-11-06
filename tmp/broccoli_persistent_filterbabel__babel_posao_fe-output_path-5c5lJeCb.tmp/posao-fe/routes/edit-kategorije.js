define('posao-fe/routes/edit-kategorije', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		kategorijaService: Ember.inject.service('kategorija-service'),
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_ADMIN") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			return Ember.RSVP.hash({
				kategorije: this.get('kategorijaService').all()

			});
		}
	});
});