define('posao-fe/routes/dodaj-oglas', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		templateService: Ember.inject.service('template-service'),
		kategorijaService: Ember.inject.service(),
		lokacijaService: Ember.inject.service(),
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {

			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			return Ember.RSVP.hash({
				templatei: this.get("templateService").all(),
				lokacije: this.get('lokacijaService').all(),
				kategorije: this.get('kategorijaService').all()

			});
		}
	});
});