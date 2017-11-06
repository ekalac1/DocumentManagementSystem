define('posao-fe/routes/registracija', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {
			if (this.get('session.isAuthenticated')) return this.transitionTo("unauthorized");
		}

	});
});