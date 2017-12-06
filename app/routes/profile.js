import Ember from 'ember';

export default Ember.Route.extend({
	oglasiService: Ember.inject.service('oglasi-service'),
	session: Ember.inject.service('session'),

	beforeModel: function() {

		if(!this.get('session.isAuthenticated')) {
			return this.transitionTo("unauthorized");
		}
	},

	model: function() {
		let username = this.get("session.data.authenticated.username");
		let _profil = this.get('oglasiService').all(username);

		return Ember.RSVP.hash({
			oglas: _profil,
		})
	}
})
