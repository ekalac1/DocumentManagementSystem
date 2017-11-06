define('posao-fe/routes/personal-adverts', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		oglasiService: Ember.inject.service(),
		session: Ember.inject.service(),

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var id = this.get('session.data.authenticated.userid');
			var _oglasi = this.get('oglasiService').my(id);

			return Ember.RSVP.hash({
				oglasi: _oglasi
			});
		}
	});
});