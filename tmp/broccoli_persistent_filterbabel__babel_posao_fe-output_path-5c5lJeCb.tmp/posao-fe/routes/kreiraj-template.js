define('posao-fe/routes/kreiraj-template', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		beforeModel: function beforeModel(transition) {

			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_ADMIN") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var _template = {};
			_template.naziv = "";
			_template.poljaTemplatea = [];

			return Ember.RSVP.hash({
				template: _template
			});
		}

	});
});